from datetime import date, datetime
from decimal import Decimal
from typing import Optional
from app.core.enums import TransactionCategory, TransactionType, PaymentMethod
from pydantic import BaseModel, ConfigDict, Field, field_validator

class TransactionCreate(BaseModel):
    title: str = Field(
        min_length=2,
        max_length=150,
    )
    description: Optional[str] = Field(
        default=None,
        max_length=500,
    )
    amount: Decimal = Field(
        gt=0,
    )
    type: TransactionType
    category: TransactionCategory
    payment_method: PaymentMethod
    transaction_date: date
    is_recurring: bool = False

    @field_validator("amount")
    @classmethod
    def validate_amount(cls, value):
        if value <= 0:
            raise ValueError(
                "Amount must be greater than zero."
            )
        return value


    @field_validator("title")
    @classmethod
    def validate_title(cls, value):
        value = value.strip()

        if len(value) < 3:
            raise ValueError(
                "Title must contain at least 3 characters."
            )

        return value


    @field_validator("description")
    @classmethod
    def validate_description(cls, value):
        if value:
            value = value.strip()

        return value


    @field_validator("transaction_date")
    @classmethod
    def validate_transaction_date(cls, value):
        if value > date.today():
            raise ValueError(
                "Transaction date cannot be in the future."
            )

        return value

class TransactionUpdate(BaseModel):
    title: Optional[str] = Field(
        default=None,
        min_length=2,
        max_length=150,
    )
    description: Optional[str]  = Field(
        default=None,
        max_length=500,
    )
    amount: Optional[Decimal] = Field(
        default=None,
        gt=0,
    )
    type: Optional[TransactionType] = None
    category: Optional[TransactionCategory] = None
    payment_method: Optional[PaymentMethod] = None
    transaction_date: Optional[date] = None
    is_recurring: Optional[bool] = None

    @field_validator("amount")
    @classmethod
    def validate_amount(cls, value):
        if value is not None and value <= 0:
            raise ValueError(
                "Amount must be greater than zero."
            )

        return value


    @field_validator("title")
    @classmethod
    def validate_title(cls, value):
        if value:
            value = value.strip()

            if len(value) < 3:
                raise ValueError(
                    "Title must contain at least 3 characters."
                )

        return value
    
    @field_validator("description")
    @classmethod
    def validate_description(cls, value):
        if value:
            value = value.strip()

        return value


    @field_validator("transaction_date")
    @classmethod
    def validate_transaction_date(cls, value):
        if value and value > date.today():
            raise ValueError(
                "Transaction date cannot be in the future."
            )

        return value


class TransactionResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    user_id: int
    title: str
    description: Optional[str]
    amount: Decimal
    type: TransactionType
    category: TransactionCategory
    payment_method: PaymentMethod
    transaction_date: date
    is_recurring: bool
    created_at: datetime
    updated_at: datetime