import { Items } from "../gateway/data.ts";

export async function listItems() {
  return await Items.all();
  // [
  //   { id: 'GvYMVE_YHr4hQRuyMcXz8', item: 'Pfizer', available: true },
  //   {
  //     id: 'YXDvhhpa02HV64VMAlHjs',
  //     item: 'Rapid testing kit',
  //     available: true,
  //   },
  // ];
}
