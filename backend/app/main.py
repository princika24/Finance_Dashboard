from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.connection import engine
from app.database.base import Base
from app.routers.auth import router as auth_router
from app.routers.users import ( router as user_router )
from app.routers.transactions import ( router as transaction_router )
from app.routers.dashboard import (router as dashboard_router)
import app.models

# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Financial Copilot"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_router)
app.include_router(user_router)
app.include_router(transaction_router)
app.include_router(dashboard_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }