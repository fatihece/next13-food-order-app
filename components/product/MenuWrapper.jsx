import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto  mb-16 ">
      <div className="flex w-full flex-col items-center">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          <button className="rounded-3xl bg-secondary px-6 py-2 text-white">
            All
          </button>
          <button className="rounded-3xl px-6 py-2 ">Burger</button>
          <button className="rounded-3xl px-6  py-2 ">Pizza</button>
          <button className="rounded-3xl px-6  py-2 ">Drink</button>
        </div>
      </div>
      <div className=" mt-8 flex flex-wrap items-center justify-center   gap-4 ">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
