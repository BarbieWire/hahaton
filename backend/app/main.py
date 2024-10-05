from fastapi import FastAPI
from app.routes import router

app = FastAPI()

# Connect the router to the main app
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the backend API"}