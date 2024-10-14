import { sleep } from "@/lib/utils";

export default async function Page() {
  await sleep(3000);

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-blue-600">
      <h2 className="text-xl">All pics</h2>
    </section>
  );
}
