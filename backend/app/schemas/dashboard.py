from pydantic import BaseModel
from decimal import Decimal
from app.core.enums import TransactionCategory

class DashboardSummary(BaseModel):
    total_income: Decimal
    total_expense: Decimal
    balance: Decimal
    transaction_count: int


class CategorySummary(BaseModel):
    category: TransactionCategory
    amount: Decimal

class MonthlySummary(BaseModel):
    month: str
    income: Decimal
    expense: Decimal