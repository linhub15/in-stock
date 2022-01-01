import { Items } from "../gateway/data.ts";
import { Item } from "../item.model.ts";

export async function updateItem(item: Item) {
  const dbRecord = Items.where('id', item.id);
  await dbRecord.update('item', item.item);
  await dbRecord.update('available', item.available);
}