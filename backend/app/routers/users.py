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
    user_id: int = Depends(get_current_user_id),
    db: Session = Depends(get_db),
    ):
    return get_user_by_id(db, user_id)