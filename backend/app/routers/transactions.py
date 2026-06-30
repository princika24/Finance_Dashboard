from fastapi import ( APIRouter, Depends)

from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.auth.dependencies import (
    get_current_user_id
)

from app.models.user import User

from app.schemas.transaction import (
    TransactionCreate
)

from app.services.transaction_service import (
    add_transaction,
    list_transactions
)

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"]
)


@router.post("/")
def create_transaction(
    transaction: TransactionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user_id
    )
):
    return add_transaction(
        db,
        current_user.id,
        transaction
    )


@router.get("/")
def get_transactions(
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user_id
    )
):
    return list_transactions(
        db,
        current_user.id
    )