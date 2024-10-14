import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full flex gap-4 justify-center py-4">
      <Link href={"/"} className="link">
        Inicio
      </Link>
      <Link href={"/dashboardA"} className="link">
        Dashboard A
      </Link>
      <Link href={"/dashboardB"} className="link">
        Dashboard B
      </Link>
    </nav>
  );
};

export { Header };
