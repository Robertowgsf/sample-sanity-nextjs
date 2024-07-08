import Link from "next/link";

import { loadSettings } from "@/sanity/loader/loadQuery";

import { SanityImage } from "../../shared/SanityImage";
import { NavbarItem } from "./NavbarItem";

export const Navbar: React.FC = async () => {
  const { data } = await loadSettings();

  return (
    <nav className="flex justify-between items-center px-5 h-[72px]">
      <div>
        <Link href={"/"}>
          <SanityImage src={data.navbar?.logo} />
        </Link>
      </div>
      <ul className="flex h-full">
        {data.navbar?.links?.map(
          link =>
            !!link.title &&
            !!link.href && (
              <li key={link._key}>
                <NavbarItem href={link.href} title={link.title} />
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};
