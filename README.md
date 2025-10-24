# OrtemHealth Backend
Monorepo with Auth and User microservices
- Auth Service: port 3001
- User Service: port 3002

## Run locally
npm install
cd apps/auth-service && npm run start
cd apps/user-service && npm run start

## Docker Compose
docker-compose up --build

## Test
npm run test --prefix apps/auth-service
npm run test --prefix apps/user-service
