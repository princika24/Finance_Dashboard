from datetime import date, datetime

from sqlalchemy import (
    String,
    Float,
    ForeignKey,
    Date,
    DateTime
)

from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship
)

from app.database.base import Base


class Transaction(Base):
    __tablename__ = "transactions"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id")
    )

    amount: Mapped[float] = mapped_column(
        Float
    )

    category: Mapped[str] = mapped_column(
        String(100)
    )

    description: Mapped[str] = mapped_column(
        String(255)
    )

    transaction_type: Mapped[str] = mapped_column(
        String(20)
    )

    transaction_date: Mapped[date] = mapped_column(
        Date
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    user = relationship(
        "User",
        back_populates="transactions"
    )