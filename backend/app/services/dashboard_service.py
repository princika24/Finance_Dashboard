import calendar

from app.schemas.dashboard import ( DashboardSummary, CategorySummary, MonthlySummary)
from sqlalchemy.orm import Session
from app.repositories.dashboard_repository import (
    get_dashboard_summary,
    get_recent_transactions,
    get_category_summary,
    get_monthly_summary
)

def fetch_dashboard_summary(
    db: Session,
    user_id: int
):
    try:
        summary = get_dashboard_summary(
            db,
            user_id
        )

        return DashboardSummary(
            total_income=summary["total_income"],
            total_expense=summary["total_expense"],
            balance=summary["balance"],
            transaction_count=summary["transaction_count"]
        )

    except Exception as e:
        raise RuntimeError(
            f"Unable to fetch dashboard summary: {e}"
        )

def fetch_recent_transactions(
    db: Session,
    user_id: int
):
    try:
        return get_recent_transactions(
            db,
            user_id
        )

    except Exception as e:
        raise RuntimeError(
            f"Unable to fetch recent transactions: {e}"
        )

def fetch_category_summary(
    db: Session,
    user_id: int
):
    try:
        rows = get_category_summary(
            db,
            user_id
        )

        return [
            CategorySummary(
                category=row.category,
                amount=row.amount
            )
            for row in rows
        ]

    except Exception as e:
        raise RuntimeError(
            f"Unable to fetch category summary: {e}"
        )

def fetch_monthly_summary(
    db: Session,
    user_id: int
):
    try:
        rows = get_monthly_summary(
            db,
            user_id
        )

        monthly = {}

        for month, transaction_type, amount in rows:
            if month not in monthly:
                monthly[month] = {
                    "month": calendar.month_abbr[int(month)],
                    "income": 0,
                    "expense": 0
                }

            if transaction_type.value == "income":
                monthly[month]["income"] = amount
            else:
                monthly[month]["expense"] = amount

        return [
            MonthlySummary(
                month=item["month"],
                income=item["income"],
                expense=item["expense"]
            )
            for item in monthly.values()
        ]

    except Exception as e:
        raise RuntimeError(
            f"Unable to fetch monthly summary: {e}"
        )