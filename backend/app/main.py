from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.api import api_router
from app.db.init_db import init_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # 在应用启动前初始化数据库
    await init_db(app)
    yield
    # 在应用关闭时执行清理工作（如果需要）

app = FastAPI(lifespan=lifespan)

# 包含全局 API 路由
app.include_router(api_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Research Due Diligence System"}


