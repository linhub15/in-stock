import { Application, Router } from './deps.ts';
import { addItem } from './commands/add_item.ts';
import { deleteItem } from './commands/delete_item.ts';
import { listItems } from './commands/list_items.ts';
import { updateItem } from './commands/update_item.ts';
import { initDb } from "./gateway/data.ts";
import { Item, ItemValue } from './item.model.ts';

// Router
const router = new Router();
router
  .get('/', ctx => ctx.response.body = 'alive')
  .get('/items', async (ctx) => {
    ctx.response.body = await listItems();
  })
  .post('/items', async (ctx) => {
    const item = (await ctx.request.body({ type: 'json' }).value) as ItemValue;
    await addItem(item);
  })
  .post('/items/:id', async (ctx) => {
    const id = ctx.params.id as string;
    const item = (await ctx.request.body({ type: 'json' }).value) as ItemValue;
    await updateItem({...{id: id}, ...item} as Item);
  })
  .delete('/items/:id', async (ctx) => {
    const id = ctx.params.id as string;
    await deleteItem(id);
  });

// DB
const db = initDb({
  host: Deno.env.get("MYSQL_HOSTNAME") || "",
  database: Deno.env.get("MYSQL_DB") || "",
  username: Deno.env.get("MYSQL_USERNAME") || "",
  password: Deno.env.get("MYSQL_PASSWORD") || "",
});


try {
  await db.sync();
} catch (error) {
  console.info("table already exists", error);
}

const port = Deno.env.get("API_PORT") || "4444";
const app = new Application();

app.use(router.routes());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Web server started on http://${hostname}:${port}`);
});

await app.listen({ port: +port });
