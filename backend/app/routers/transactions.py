from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import date

from app.database.connection import get_db
from app.schemas.transaction import (
    TransactionCreate,
    TransactionUpdate,
    TransactionResponse,
)

from app.services.transaction_service import (
    create_new_transaction,
    get_all_transactions,
    edit_transaction,
    remove_transaction,
    get_transaction,
)

from app.auth.dependencies import get_current_user_id
from app.models.user import User
from app.core.query_enums import SortOption
from app.schemas.common import PaginatedResponse

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)

@router.post(
    "",
    response_model=TransactionResponse,
)
def create(
    transaction: TransactionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id),
):
    return create_new_transaction(
        db,
        current_user,
        transaction,
    )


@router.get("",
    response_model=PaginatedResponse[TransactionResponse],)
def get_transactions(
    page: int = 1,
    page_size: int = 10,
    category: str | None = None,
    transaction_type: str | None = None,
    search: str | None = None,
    start_date: date | None = None,
    end_date: date | None = None,
    sort: SortOption = SortOption.NEWEST,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id),
):
    return get_all_transactions(
        db,
        current_user,
        page,
        page_size,
        category,
        transaction_type,
        search,
        start_date,
        end_date,
        sort,
    )

@router.put("/{transaction_id}",
    response_model=TransactionResponse,)
def update(
    transaction_id: int,
    transaction: TransactionUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id),
):
    updated = edit_transaction(
        db,
        current_user,
        transaction_id,
        transaction,
    )

    return updated

@router.delete("/{transaction_id}")
def delete(
    transaction_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id),
):
    remove_transaction(
        db,
        current_user,
        transaction_id,
    )

    return {
        "message": "Transaction deleted"
    }

@router.get(
    "/{transaction_id}",
    response_model=TransactionResponse,
)
def get_one(
    transaction_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id),
):
    transaction = get_transaction(
        db,
        current_user,
        transaction_id,
    )

    return transaction