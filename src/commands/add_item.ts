import { Item, ItemValue } from "../item.model.ts";
import { nanoid }  from "../deps.ts";
import { Items } from "../gateway/data.ts";

export async function addItem(value: ItemValue) {
  const item = {...{id: nanoid()}, ...value} as Item;
  await Items.create({...item});
}