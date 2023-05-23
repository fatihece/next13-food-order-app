import Image from "next/image";
import Title from "./ui/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItem = () => {
  return (
    <div className="flex flex-1 items-center gap-x-4 rounded-md bg-secondary px-[15px] py-5">
      <div className="relative h-36 w-36 overflow-hidden rounded-full border-[5px] border-primary after:content-[''] md:h-44 md:w-44">
        <Image
          src="/images/o1.jpg"
          alt=""
          layout="fill"
          className="transition-all hover:scale-105"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>
        <div className="my-1 font-dancing">
          <span className="text-[40px]">20%</span>
          <span className="ml-1 inline-block text-sm">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-between gap-6 py-20">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;
