from sqlalchemy import create_engine, MetaData

DATABASE_URL = "postgresql://user:password@localhost/db_name"

engine = create_engine(DATABASE_URL)
metadata = MetaData()