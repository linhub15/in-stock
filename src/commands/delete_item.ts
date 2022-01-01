import { Items } from "../gateway/data.ts";

export async function deleteItem(id: string) {
  await Items.deleteById(id);
}