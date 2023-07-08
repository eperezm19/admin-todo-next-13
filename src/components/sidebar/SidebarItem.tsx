"use client";
import { CiBookmarkCheck } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`
        px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
        ${
          pathName === path
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-40"
            : ""
        }
        `}
      >
        {icon}
        <span className="group-hover:text-gray-700">{title}</span>
      </Link>
    </li>
  );
};
