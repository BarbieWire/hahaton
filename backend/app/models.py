from pydantic import BaseModel

class User(BaseModel):
    user_id: int
    username: str

class Course(BaseModel):
    course_id: int
    course_name: str