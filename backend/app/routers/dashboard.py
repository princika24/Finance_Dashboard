from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.auth.dependencies import get_current_user_id

from app.models.user import User
from app.services.dashboard_service import (
    fetch_dashboard_summary,
    fetch_recent_transactions,
    fetch_category_summary,
    fetch_monthly_summary
)
from app.schemas.dashboard import (
    DashboardSummary,
    CategorySummary,
    MonthlySummary
)
from app.schemas.transaction import TransactionResponse

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/summary", response_model=DashboardSummary)
def dashboard_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id)
):
    return fetch_dashboard_summary(
        db,
        current_user.id
    )

@router.get("/recent", response_model=list[TransactionResponse])
def recent_transactions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id)
):
    return fetch_recent_transactions(
        db,
        current_user.id
    )

@router.get("/categories", response_model=list[CategorySummary])
def category_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id)
):
    return fetch_category_summary(
        db,
        current_user.id
    )

@router.get("/monthly", response_model=list[MonthlySummary])
def monthly_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user_id)
):
    return fetch_monthly_summary(
        db,
        current_user.id
    )