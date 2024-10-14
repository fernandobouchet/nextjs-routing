import { sleep } from "@/lib/utils";

export default async function List() {
  await sleep(2000);

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4">
      <h2 className="text-xl">List</h2>
    </section>
  );
}
