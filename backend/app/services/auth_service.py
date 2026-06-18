from sqlalchemy.orm import Session

from app.auth.hashing import (
    hash_password,
    verify_password
)

from app.repositories.user_repository import (
    get_user_by_email,
    create_user
)


def register_user(
    db: Session,
    name: str,
    email: str,
    password: str
):

    existing = get_user_by_email(
        db,
        email
    )

    if existing:
        raise ValueError(
            "Email already registered"
        )

    hashed = hash_password(password)

    return create_user(
        db,
        name,
        email,
        hashed
    )


def authenticate_user(
    db: Session,
    email: str,
    password: str
):

    user = get_user_by_email(
        db,
        email
    )

    if not user:
        return None

    if not verify_password(
        password,
        user.password_hash
    ):
        return None

    return user