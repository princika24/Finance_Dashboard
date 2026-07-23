from sqlalchemy.orm import Session
from sqlalchemy import select, func, or_
import math

from app.models.transaction import Transaction
from app.core.query_enums import SortOption

def create_transaction(
    db: Session,
    transaction: Transaction
):
    db.add(transaction)
    db.commit()
    db.refresh(transaction)

    return transaction

def get_transaction_by_id(
    db: Session,
    transaction_id: int,
):
    return db.get(Transaction, transaction_id)

def get_user_transactions(
    db: Session,
    user_id: int,
    page=1,
    page_size=10,
    category=None,
    transaction_type=None,
    search=None,
    start_date=None,
    end_date=None,
    sort=SortOption.NEWEST,
):
    query = select(Transaction).where(
        Transaction.user_id == user_id
    )

    if category:
        query = query.where(
            Transaction.category == category
        )

    if transaction_type:
        query = query.where(
            Transaction.type == transaction_type
        )

    if search:
        query = query.where(
            or_(
                Transaction.title.ilike(f"%{search}%"),
                Transaction.description.ilike(f"%{search}%"),
            )
        )
        if start_date:
            query = query.where(
                Transaction.transaction_date >= start_date
            )

        if end_date:
            query = query.where(
                Transaction.transaction_date <= end_date
            )

    total = db.scalar(
        select(func.count())
        .select_from(query.subquery())
    )

    if sort == SortOption.OLDEST:
        query = query.order_by(
            Transaction.transaction_date.asc()
        )

    elif sort == SortOption.HIGHEST:
        query = query.order_by(
            Transaction.amount.desc()
        )

    elif sort == SortOption.LOWEST:
        query = query.order_by(
            Transaction.amount.asc()
        )

    else:
        query = query.order_by(
            Transaction.transaction_date.desc()
        )

    transactions = db.scalars(
        query.offset((page - 1) * page_size)
            .limit(page_size)
    ).all()

    return {
        "items": transactions,
        "total": total,
        "page": page,
        "page_size": page_size,
        "total_pages": math.ceil(total / page_size)
        if total
        else 1,
    }


def update_transaction(
    db: Session,
    transaction: Transaction,
):
    db.commit()
    db.refresh(transaction)
    return transaction


def delete_transaction(
    db: Session,
    transaction: Transaction,
):
    db.delete(transaction)
    db.commit()

