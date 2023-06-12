"use client";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import Account from "../../../components/profile/Account";
import { useState } from "react";
import Password from "../../../components/profile/Password";
const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex min-h-[calc(100vh_-_433px)] flex-col px-10 py-10 lg:flex-row">
      <div className="w-100 flex-shrink-0 lg:w-80">
        <div className="relative flex flex-col items-center border border-b-0 px-10 py-5">
          <Image
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="mt-1 text-2xl">Admin</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <FaProductHunt />
            <button className="ml-1 ">Products</button>
          </li>
          <li
            className={`flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <FaKey />
            <button className="ml-1">Password</button>
          </li>
          <li
            className={`flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <FaShoppingBag />
            <button className="ml-1">Orders</button>
          </li>
          <li
            className={`flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <FaSignOutAlt />
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
    </div>
  );
};

export default Profile;
