# A Simple User CRUD made with Elysia and Bun

## How to use

install dependencies:

```bash
bun install
```
 
Add environment database url variable

```bash
echo DATABASE_URL="file:./dev.db" > .env
```

Setup local SQLite Database:

```bash
npx prisma migrate dev
```

Run HTTP server with:

```bash
bun run index.ts
```

## Application Routes

### Users
  - POST    /users -> Create a user
  - GET     /users -> Get all users data
  - GET     /users/:id -> Get a single user data
  - PUT     /users/:id -> Update a user
  - DELETE  /users/:id -> Delete a user

### Docs
  - GET /docs -> Use with browser to acces documentation page
  - GET /docs/json -> Get JSON docs data