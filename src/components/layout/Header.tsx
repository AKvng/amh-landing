import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const landingNavigation = [
  { name: "features", href: "#features" },
  { name: "services", href: "#services" },
  { name: "pricing", href: "#pricing" },
  { name: "contact", href: "#contact" },
];

function Header() {
  const [stickyOpaque, setStickyOpaque] = useState<boolean>(false);
  // Navigation for bigger screens
  const Nav = () => {
    const navClassName = `hidden px-3 md:px-16 lg:px-32 sticky md:flex justify-between items-center  pt-6 pb-4 top-0 z-10 ${
      stickyOpaque ? "opacity-70" : ""
    } ${stickyOpaque && "bg-primary-tint"}`;
    return (
      <nav className={navClassName}>
        <Link
          className="relative w-8 md:w-12 aspect-[0.968] md:aspect-[1] rounded-lg"
          title="homepage"
          href="/"
        >
          <Image
            className="object-cover object-center"
            src="/LOGO-COLORED.png"
            alt="AHH logo"
            fill
          />
        </Link>
        <ul className=" flex gap-x-3 px- justify-center">
          {landingNavigation.map(({ name, href }) => (
            <li key={name} className="font-semibold">
              <Link className="capitalize hover:text-primary" href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="py-2 px-3 bg-high-emphasis text-bright rounded-lg self-end">
          Sign In
        </button>
      </nav>
    );
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setStickyOpaque(window.pageYOffset > 100);
    });
  }, [setStickyOpaque]);

  const menuButtonClassName = `md:hidden absolute inline-flex left-3 items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-primary data-[focus]:outline-1 data-[focus]:outline-white ${
    stickyOpaque ? "opacity-70" : ""
  } ${stickyOpaque && "bg-primary-tint"}`;
  return (
    <Menu>
      <div className={"md:hidden z-20 sticky top-3 left-2"}>
        <div className="relative px-3 flex items-center justify-center">
          <MenuButton className={menuButtonClassName}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>

          <Link
            className="relative w-8 md:w-12 aspect-[0.968] md:aspect-[1] rounded-lg"
            title="homepage"
            href="/"
          >
            <Image
              className="object-cover object-center"
              src="/LOGO-COLORED.png"
              alt="AHH logo"
              fill
            />
          </Link>

          <button
            className={`md:hidden absolute py-[3px] px-3 right-3 bg-high-emphasis text-bright rounded-lg ${
              stickyOpaque ? "opacity-70" : ""
            } ${stickyOpaque && "bg-primary-tint"}`}
            title="sign in"
          >
            Sign In
          </button>
        </div>
      </div>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-64 md:hidden flex flex-col capitalize gap-y-3 sm:gap-y-3 origin-top-right rounded-xl border border-white/5 bg-dark p-2 text-sm/6 text-white transition delay-0 duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {landingNavigation.map(({ name, href }, ind) => (
          <MenuItem key={name + ind}>
            <Link href={href || "#"}>
              <p className="p-2 bg-primary rounded-md flex justify-left items-center">
                {name}
              </p>
            </Link>
          </MenuItem>
        ))}
      </MenuItems>

      <Nav />
    </Menu>
  );
}

export default Header;
