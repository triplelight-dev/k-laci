# Project Name

프로젝트를 설명해주세요.

## Getting Started

이 프로젝트를 로컬에서 실행하려면, 다음 스텝을 따라주세요.

### 1. Clone the repository

레포지토리를 로컬에 클론하세요.

```bash
git clone {your_github_repository}
```

### 2. Install Dependencies

프로젝트 디렉토리로 이동한 뒤

```
cd your_project_name
```

의존성을 설치하세요.

```bash
$ yarn install
```

### 3. 환경변수 설정

프로젝트 최상단에 `.env` 파일을 생성하고 필요한 환경변수 값을 세팅하세요.

### 4. 애플리케이션 실행

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## API Documentation

API 문서는 `Swagger` 를 통해서 확인하실 수 있습니다. 서버가 켜진 후, 다음 엔드포인트를 통해서 API 문서에 접근할 수 있습니다.

```bash
http://localhost:3000/api
```

# Backend

## Description

NestJS backend application for K-Laci project.

## Environment Setup

Create a `.env` file in the root of the backend directory with the following variables:

```env
# Application
NODE_ENV=development
PORT=3000

# Supabase
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key

# CORS
CORS_ORIGIN=http://localhost:3000
```

To get your Supabase credentials:
1. Go to your Supabase project dashboard
2. Click on the "Settings" icon in the sidebar
3. Go to "API" section
4. Copy the "Project URL" and "anon public" key
5. Paste them in your `.env` file

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
```
http://localhost:3000/api
```

## Authentication Endpoints

The following authentication endpoints are available:

- `POST /auth/signup` - Register a new user
  - Required fields: email, password, name
- `POST /auth/signin` - Sign in a user
  - Required fields: email, password
- `POST /auth/signout` - Sign out the current user
- `GET /auth/session` - Get the current user's session

# nestjs_starter_template
