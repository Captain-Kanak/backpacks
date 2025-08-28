import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

export default function LessonsPage() {
  return (
    <div className="text-dark-core">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 text-dark-core flex items-center gap-8 mt-8 mb-12">
        <Link href={"/"}>
          <button className="border flex gap-2 flex-col items-center py-2 px-5 cursor-pointer">
            <FaHtml5 size={50} />
          </button>
        </Link>
        <Link href={"/"}>
          <button className="border flex gap-2 flex-col items-center py-2 px-5 cursor-pointer">
            <FaCss3Alt size={50} />
          </button>
        </Link>
        <Link href={"/javascript"}>
          <button className="border flex gap-2 flex-col items-center py-2 px-5 cursor-pointer">
            <IoLogoJavascript size={50} />
          </button>
        </Link>
        <Link href={"/"}>
          <button className="border flex gap-2 flex-col items-center py-2 px-5 cursor-pointer">
            <BiLogoTypescript size={50} />
          </button>
        </Link>
        <Link href={"/"}>
          <button className="border flex gap-2 flex-col items-center py-2 px-5 cursor-pointer">
            <FaReact size={50} />
          </button>
        </Link>
        <Link href={"/"}>
          <button className="border flex gap-2 flex-col items-center py-2 px-5 cursor-pointer">
            <SiNextdotjs size={50} />
          </button>
        </Link>
      </div>
    </div>
  );
}
