import Image from "next/image";

const CustomerItem = ({ imgSrc }) => {
  return (
    <div className="mt-5">
      <div className="rounded-[5px] bg-secondary p-6 text-white">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="mt-4 flex flex-col">
          <span className="text-lg font-semibold">Moana Michell</span>
          <span className="text-[15px]">magna aliqua</span>
        </div>
      </div>

      <div
        className="relative mt-8 flex h-28 w-28 justify-center rounded-full border-4 border-primary before:absolute 
      before:top-0 before:h-5 before:w-5 before:-translate-y-3 before:rotate-45 before:bg-primary before:content-[''] "
      >
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
