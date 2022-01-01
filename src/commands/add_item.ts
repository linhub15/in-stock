import { Item } from "../item.model.ts";
import { nanoid }  from "https://deno.land/x/nanoid/mod.ts";
import { Items } from "../gateway/data.ts";

export async function addItem(item: Item) {
  item.id = nanoid();
  await Items.create({...item});
}