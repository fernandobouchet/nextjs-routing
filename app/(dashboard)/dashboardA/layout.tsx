const DashboardALayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="p-4">
      <div>Este sub-layout pertenece al Dashboard A</div>
      {children}
    </section>
  );
};

export default DashboardALayout;
