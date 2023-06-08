"use client";
import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";
const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const pathname = usePathname();

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div
        className={`relative z-50 h-[5.5rem] ${
          pathname === "/" ? "bg-transparent" : "bg-secondary"
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between text-white">
          <Logo />
          <nav
            className={`absolute left-0 top-0 hidden h-screen w-full bg-white text-black sm:static sm:flex sm:h-auto sm:w-auto sm:bg-transparent sm:text-white ${
              isMenuModal === true && "!grid place-content-center"
            }`}
          >
            <ul className="flex flex-col items-center gap-x-2 sm:flex-row">
              <li className="cursor-pointer px-[5px] py-[10px] uppercase hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer px-[5px] py-[10px] uppercase hover:text-primary">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="cursor-pointer px-[5px] py-[10px] uppercase hover:text-primary">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer px-[5px] py-[10px] uppercase hover:text-primary">
                <Link href="/reservation">Book Table</Link>
              </li>
            </ul>
            {isMenuModal && (
              <button
                className="absolute right-4 top-4 z-50"
                onClick={() => setIsMenuModal(false)}
              >
                <GiCancel size={25} className=" transition-all" />
              </button>
            )}
          </nav>

          <div className="flex cursor-pointer items-center gap-x-4">
            <Link href="/login">
              <FaUserAlt className="transition-all hover:text-primary" />
            </Link>
            <Link href="/cart">
              <FaShoppingCart className="transition-all hover:text-primary" />
            </Link>
            <button onClick={() => setIsSearchModal(true)}>
              <FaSearch className="transition-all hover:text-primary" />
            </button>
            <a href="#" className="sm hidden md:inline-block">
              <button className="btn-primary whitespace-nowrap">
                Order Online
              </button>
            </a>
            <button
              className="sm:inline-block md:hidden"
              onClick={() => setIsMenuModal(true)}
            >
              <GiHamburgerMenu className="text-xl transition-all hover:text-primary" />
            </button>
          </div>
        </div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
      </div>
    </div>
  );
};

export default Header;
