# IT-project-Team92

## 技术栈：
+ Python 3.12
+ FastAPI：用于构建高性能的Web API。
+ Tortoise ORM：用于与数据库进行交互。
+ Pydantic：用于数据验证和序列化。
+ JWT：用于用户认证和授权。
+ Docker：用于容器化应用，方便部署和开发。
## 项目结构
``` plaintext
.
├── app
│   ├── api                    # 路由和视图
│   │   ├── admin.py           # 管理员相关路由
│   │   ├── auth.py            # 用户认证相关路由
│   │   ├── __init__.py        # 路由初始化
│   ├── config.py              # 配置文件，管理环境变量
│   ├── db
│   │   ├── init_db.py         # 数据库初始化
│   ├── main.py                # 应用的入口文件
│   ├── models                 # 数据库模型定义
│   │   ├── company.py         # 公司模型
│   │   ├── __init__.py        # 模型初始化
│   │   ├── risk.py            # 风险评估相关模型
│   │   └── user.py            # 用户模型
│   ├── schemas                # Pydantic 模型，用于数据验证
│   │   ├── __init__.py
│   │   └── user.py            # 用户相关的 Pydantic 模型
│   └── utils                  # 实用工具和辅助函数
│       ├── security.py        # 安全相关函数（如密码哈希）
│       └── token.py           # JWT 令牌相关函数
├── docker-compose.yml         # Docker Compose 配置文件
├── Dockerfile                 # Docker 镜像构建文件
├── requirements.txt           # Python 依赖包列表
└── tests                      # 测试用例
    ├── conftest.py
    ├── __init__.py
    └── test_user.py           # 用户相关的测试
```
## 安装与运行
### 先决条件
- Docker
- Docker Compose

### 克隆项目
```bash
git clone https://github.com/RoyX0423/IT-project-Team92.git
cd research-due-diligence
```

### 使用 Docker 运行

1. 构建并启动服务
```bash
docker compose up --build -d #启动并构建docker中的所有服务，并且在后台运行
```
如需实时调试后端服务，则单独运行docker中的后端服务
```bash
docker compose up web #启动docker服务中的web服务，并且在前台运行
```

2. 数据库管理服务将在 http://localhost:8000 运行，无需额外安装数据库管理软件
3. Swagger UI 将在 http://localhost:8001/docs 提供 API 文档。

## 功能概览
### 用户管理
- [x] 用户注册：POST /users/register
- [x] 用户登录：POST /users/login
- [x] 获取当前用户信息：GET /users/me
- [x] 修改密码：PUT /users/password
### 管理员功能
- [x] 管理员面板：GET /admin/admin-dashboard
- [x] 查看所有用户：GET /admin/users
### 风险评估
- [ ] 创建和管理公司信息
- [ ] 为公司创建风险评估
- [ ] 管理风险类别和子类别


