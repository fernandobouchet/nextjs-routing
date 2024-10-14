import Link from "next/link";

const DashboardBLayout = ({
  children,
  list,
  pics,
}: Readonly<{
  children: React.ReactNode;
  list: React.ReactNode;
  pics: React.ReactNode;
}>) => {
  return (
    <section className="p-4">
      <div className=" flex flex-col gap-4 py-4">
        <p className="italic">Este sub-layout pertenece al Dashboard B</p>
        <Link href={"/dashboardB/all"} className="link">
          All Pics
        </Link>
      </div>

      {children}
      <div className="flex gap-10">
        {list}
        {pics}
      </div>
    </section>
  );
};

export default DashboardBLayout;
