const DashboardALayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="p-4">
      <div className=" flex flex-col gap-4 py-4">
        <p className="italic">Este sub-layout pertenece al Dashboard A</p>
      </div>
      {children}
    </section>
  );
};

export default DashboardALayout;
