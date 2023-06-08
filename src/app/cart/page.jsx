import Image from "next/image";
import Title from "../../../components/ui/Title";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex min-h-[calc(100vh_-_433px)] w-full flex-1 items-center overflow-x-auto p-10">
          <table className="w-full min-w-[1000px] text-center text-sm text-gray-500">
            <thead className="bg-gray-700 text-xs uppercase text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  PRODUCT
                </th>
                <th scope="col" className="px-6 py-3">
                  EXTRAS
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-700 bg-secondary transition-all hover:bg-primary ">
                <td className="flex items-center justify-center gap-x-1 whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  <span>mayonez, acı sos, ketçap,</span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  $20
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-white">
                  1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex min-h-[calc(100vh_-_433px)] w-full flex-col justify-center bg-secondary p-12 !text-center text-white   md:w-auto md:text-start">
          <Title addClass="text-[40px]">CART TOTAL</Title>

          <div className="mt-6">
            <b>Subtotal: </b>$20 <br />
            <b className=" my-1 inline-block">Discount: </b>$0.00 <br />
            <b>Total: </b>$20
          </div>
          <div>
            <button className="btn-primary mt-4 w-52 md:w-auto">
              CHECKOUT NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
