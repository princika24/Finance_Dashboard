from sqlalchemy.orm import Session

from app.models.transaction import Transaction

from app.repositories.transaction_repository import (
    create_transaction,
    get_user_transactions
)


def add_transaction(
    db: Session,
    user_id: int,
    data
):

    transaction = Transaction(
        user_id=user_id,
        amount=data.amount,
        category=data.category,
        description=data.description,
        transaction_type=data.transaction_type,
        transaction_date=data.transaction_date
    )

    return create_transaction(
        db,
        transaction
    )


def list_transactions(
    db: Session,
    user_id: int
):
    return get_user_transactions(
        db,
        user_id
    )