"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  href: string;
  title: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`relative flex h-full items-center px-4 transition-colors duration-300 hover:text-primary-ui hover:after:w-full ${pathname === "/" + href ? "text-primary-ui after:w-full" : ""} after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:w-0 after:content['.'] after:text-transparent after:bg-primary-ui after:h-[3px] after:transition-all after:duration-300`}>
      {title}
    </Link>
  );
};
