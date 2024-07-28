import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { userRoutes } from "./user";

const elysia = new Elysia()
  .use(swagger({
    path: '/docs',
    exclude: ['/docs', '/docs/json'],
    documentation: {
      info: {
        title: "Simple Users Crud with Elysia",
        version: '1.0.0'
      },
      tags: [
        { name: 'Users', description: 'Users Endpoints' }
      ]
    }
  }))
  .use(userRoutes)
  .listen(3333)