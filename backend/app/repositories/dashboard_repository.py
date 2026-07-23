from sqlalchemy import func, extract
from sqlalchemy.orm import Session

from app.models.transaction import Transaction
from app.core.enums import TransactionType

def get_dashboard_summary(
    db: Session,
    user_id: int
):
    income = (
        db.query(
            func.sum(Transaction.amount)
        )
        .filter(
            Transaction.user_id == user_id,
            Transaction.type == TransactionType.INCOME
        )
        .scalar()
    )
    expense = (
        db.query(
            func.sum(Transaction.amount)
        )
        .filter(
            Transaction.user_id == user_id,
            Transaction.type == TransactionType.EXPENSE
        )
        .scalar()
    )
    count = (
        db.query(
            func.count(Transaction.id)
        )
        .filter(
            Transaction.user_id == user_id
        )
        .scalar()
    )
    return {
        "total_income": income or 0,
        "total_expense": expense or 0,
        "balance": (income or 0) - (expense or 0),
        "transaction_count": count
    }

def get_recent_transactions(
    db: Session,
    user_id: int,
    limit: int = 5
):
    return (
        db.query(Transaction)
        .filter(
            Transaction.user_id == user_id
        )
        .order_by(
            Transaction.transaction_date.desc()
        )
        .limit(limit)
        .all()
    )

def get_category_summary(
    db: Session,
    user_id: int
):
    return (
        db.query(
            Transaction.category,
            func.sum(Transaction.amount).label("amount")
        )
        .filter(
            Transaction.user_id == user_id
        )
        .group_by(
            Transaction.category
        )
        .all()
    )

def get_monthly_summary(
    db: Session,
    user_id: int
):
    return (
        db.query(
            extract(
                "month",
                Transaction.transaction_date
            ).label("month"),
            Transaction.type,
            func.sum(Transaction.amount).label("amount")
        )
        .filter(
            Transaction.user_id == user_id
        )
        .group_by(
            extract(
                "month",
                Transaction.transaction_date
            ),
            Transaction.type
        )
        .order_by(
            extract(
                "month",
                Transaction.transaction_date
            )
        )
        .all()
    )