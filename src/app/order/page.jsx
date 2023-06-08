import Image from "next/image";

const Order = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-h-[calc(100vh_-_433px)]  min-w-[1000px] flex-col items-center justify-center  p-10">
        <div className=" flex max-h-28 w-full  flex-1 items-center">
          <table className="w-full text-center text-sm text-gray-500">
            <thead className="bg-gray-700 text-xs uppercase text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ORDER ID
                </th>
                <th scope="col" className="px-6 py-3">
                  CUSTOMER
                </th>
                <th scope="col" className="px-6 py-3">
                  ADDRESS
                </th>
                <th scope="col" className="px-6 py-3">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-700 bg-secondary transition-all hover:bg-primary ">
                <td className="flex items-center justify-center gap-x-1 whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  63107f5559...
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  Ece Naz
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  Cerkezkoy
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  $18
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex w-full justify-between bg-primary p-10">
          <div className="relative flex flex-col">
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex animate-pulse flex-col">
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
