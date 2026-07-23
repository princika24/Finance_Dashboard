from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.connection import get_db
from app.auth.dependencies import (get_current_user_id)
from app.models.user import User
from app.repositories.user_repository import get_user_by_id
from app.schemas.user import UserResponse


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/me", response_model=UserResponse,)
def get_me(
    current_user: User = Depends(get_current_user_id),
    ):
    return current_user