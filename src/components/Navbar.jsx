import Link from "next/link";

export default function Navbar() {
  const links = (
    <>
      <li className="hover:text-[#7A85C1]">
        <Link href={"/"}>HOME</Link>
      </li>
      <li className="hover:text-[#7A85C1]">
        <Link href={"/lessons"}>LESSONS</Link>
      </li>
      <li className="hover:text-[#7A85C1]">
        <Link href={"/blogs"}>BLOGS</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-primary-dark text-light py-5 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-center px-4 lg:px-0">
        <ul className="flex items-center gap-6 text-lg font-semibold">
          {links}
        </ul>
      </div>
    </nav>
  );
}
