import Elysia, { t } from "elysia";
import { prisma } from "../lib/prisma";

export const userRoutes = new Elysia({ prefix: 'users', detail: { tags: ["Users"] }})
  .post("", async ({ body, set }) => { 
    await prisma.user.create({
      data: {
        name: body.name,
        email: body.email
      }
    })

    set.status = 'Created'
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String({format: "email"})
    }, { description: 'Expected an username and email' })
  })
  .get('', async () => {
    const users = await prisma.user.findMany()
    return {
      users,
    }
  })
  .get('/:id', async ({params : {id}}) => {
    const user = await prisma.user.findUnique({
      where: { id }
    })

    return {
      user,
    }
  }, {
    params: t.Object({
      id: t.String({format: 'uuid'})
    })
  })
  .put('/:id', async ({params : { id }, body: {name, email}, set}) => {
    await prisma.user.update({
      where: { id },
      data: {
        name,
        email
      }
    })

    set.status = 'No Content'
  }, {
    params: t.Object({
      id: t.String({format: 'uuid'})
    }),
    body: t.Object({
      name: t.Optional(t.String()),
      email: t.Optional(t.String())
    })
  })
  .delete('/:id', async ({params : { id }, set}) => {
    await prisma.user.delete({ where: { id } })

    set.status = 'No Content'
  }, {
    params: t.Object({
      id: t.String({format: 'uuid'})
    }),
  })