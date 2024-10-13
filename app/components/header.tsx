import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full flex gap-4 justify-center">
      <Link href={"/"}>Inicio</Link>
      <Link href={"/dashboardA"}>Dashboard A</Link>
      <Link href={"/dashboardB"}>Dashboard B</Link>
    </nav>
  );
};

export { Header };
