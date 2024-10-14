import { sleep } from "@/lib/utils";

export default async function DefaultList() {
  await sleep(1000);

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-purple-700">
      <h2 className="text-xl">Default list page</h2>
    </section>
  );
}
