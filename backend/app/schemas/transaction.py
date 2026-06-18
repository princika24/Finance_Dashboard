from datetime import date

from pydantic import BaseModel


class TransactionCreate(BaseModel):
    amount: float
    category: str
    description: str
    transaction_type: str
    transaction_date: date


class TransactionResponse(BaseModel):
    id: int
    amount: float
    category: str
    description: str
    transaction_type: str
    transaction_date: date

    model_config = {
        "from_attributes": True
    }