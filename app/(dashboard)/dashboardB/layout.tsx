const DashboardBLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="p-4">
      <div>Este sub-layout pertenece al Dashboard B</div>
      {children}
    </section>
  );
};

export default DashboardBLayout;
