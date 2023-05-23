import Image from "next/image";
import React from "react";
import Title from "../../../components/ui/Title";

const Test = () => {
  return (
    <div className="flex h-screen flex-wrap items-center gap-20 py-20 ">
      <div className="relative mx-20 h-[80%] w-[80%] md:flex-1">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="text-center md:flex-1 md:text-start">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="my-4 inline-block text-2xl font-bold text-primary underline underline-offset-1">
          $10
        </span>
        <p className="my-4 text-sm md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
          molestiae.
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center justify-center gap-x-20 md:justify-start">
            <div className="relative h-8 w-8">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="absolute -right-6 top-0 rounded-full bg-primary px-[5px] text-xs font-medium">
                Small
              </span>
            </div>
            <div className="relative h-12 w-12">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="absolute -right-6 top-0 rounded-full bg-primary px-[5px] text-xs font-medium">
                Medium
              </span>
            </div>
            <div className="relative h-16 w-16">
              <Image src="/images/size.png" alt="" layout="fill" />
              <span className="absolute -right-6 top-0 rounded-full bg-primary px-[5px] text-xs font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="my-6 flex justify-center gap-x-4 md:justify-start">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="h-5 w-5 accent-primary" />
            <span className="text-sm font-semibold">Ketchup</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="h-5 w-5 accent-primary" />
            <span className="text-sm font-semibold">Mayonnaise</span>
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="h-5 w-5 accent-primary" />
            <span className="text-sm font-semibold">Spicy</span>
          </label>
        </div>
        <button className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Test;
