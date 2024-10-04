from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings to allow React frontend to communicate with the FastAPI backend
origins = [
    "http://localhost:3000",  # React default port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample route for testing
@app.get("/api/")
async def read_root():
    return {"message": "Hello, FastAPI from the backend!"}
