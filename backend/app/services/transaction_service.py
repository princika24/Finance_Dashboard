from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models.transaction import Transaction

from app.repositories.transaction_repository import (
    create_transaction,
    get_transaction_by_id,
    get_user_transactions,
    update_transaction,
    delete_transaction,
)

from app.core.query_enums import SortOption

def create_new_transaction(
    db: Session,
    current_user,
    data,
):
    transaction = Transaction(
        user_id=current_user.id,
        **data.model_dump()
    )

    return create_transaction(db, transaction)


def get_all_transactions(
    db,
    current_user,
    page=1,
    page_size=10,
    category=None,
    transaction_type=None,
    search=None,
    start_date=None,
    end_date=None,
    sort=SortOption.NEWEST,
):
    return get_user_transactions(
        db=db,
        user_id=current_user.id,
        page=page,
        page_size=page_size,
        category=category,
        transaction_type=transaction_type,
        search=search,
        start_date=start_date,
        end_date=end_date,
        sort=sort,
    )


def edit_transaction(
    db: Session,
    current_user,
    transaction_id: int,
    data,
):
    transaction = get_transaction_by_id(
        db,
        transaction_id,
    )

    if not transaction:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Transaction not found",
        )

    if transaction.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Forbidden",
        )

    updates = data.model_dump(exclude_unset=True)

    for key, value in updates.items():
        setattr(transaction, key, value)

    return update_transaction(
        db,
        transaction,
    )


def remove_transaction(
    db: Session,
    current_user,
    transaction_id: int,
):
    transaction = get_transaction_by_id( db, transaction_id,)

    if not transaction:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Transaction not found",
        )

    if transaction.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Forbidden",
        )

    delete_transaction(
        db,
        transaction,
    )

    return True

def get_transaction(
    db,
    current_user,
    transaction_id,
):
    transaction = get_transaction_by_id( db, transaction_id, )

    if not transaction:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Transaction not found",
        )

    if transaction.user_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Forbidden",
        )

    return transaction