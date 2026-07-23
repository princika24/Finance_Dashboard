from datetime import date, datetime
from sqlalchemy import (
    Column,
    Integer,
    String,
    Numeric,
    Date,
    DateTime,
    Boolean,
    ForeignKey,
    Enum,
    func,
)
from sqlalchemy.orm import (
    Mapped,
    mapped_column,
    relationship
)
from app.database.base import Base
from app.core.enums import (
    TransactionType,
    TransactionCategory,
    PaymentMethod,
)


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    title = Column(
        String(150),
        nullable=False,
    )

    description = Column(
        String(500),
        nullable=True,
    )

    amount = Column(
        Numeric(12, 2),
        nullable=False,
    )

    type = Column(
        Enum(TransactionType),
        nullable=False,
        index=True,
    )

    category = Column(
        Enum(TransactionCategory),
        nullable=False,
        index=True,
    )

    payment_method = Column(
        Enum(PaymentMethod),
        nullable=False,
    )

    transaction_date = Column(
        Date,
        nullable=False,
        index=True,
    )

    is_recurring = Column(
        Boolean,
        default=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    user = relationship(
        "User",
        back_populates="transactions",
    )