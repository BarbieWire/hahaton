from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
def get_users():
    return [{"user_id": 1, "username": "user1"}]

@router.get("/courses")
def get_courses():
    return [{"course_id": 1, "course_name": "Intro to FastAPI"}]