"use client";
import Image from "next/image";
import Input from "../../../components/form/Input";
import Title from "../../../components/ui/Title";
import { AiFillHome } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useFormik } from "formik";
import { profileSchema } from "../../../schema/profile";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];
  return (
    <div className="flex min-h-[calc(100vh_-_433px)] px-10">
      <div className="w-80">
        <div className="relative flex flex-col items-center border border-b-0 px-10 py-5">
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="mt-1 text-2xl">John Doe</b>
        </div>
        <ul className="text-center font-semibold">
          <li className="flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white">
            <AiFillHome />
            <button className="ml-1 ">Account</button>
          </li>
          <li className="flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white">
            <FaKey />
            <button className="ml-1">Password</button>
          </li>
          <li className="flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white">
            <FaShoppingBag />
            <button className="ml-1">Orders</button>
          </li>
          <li className="flex w-full cursor-pointer items-center justify-center border p-3 transition-all hover:bg-primary hover:text-white">
            <FaSignOutAlt />
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      <form className="flex-1 p-8">
        <Title addClass="text-[40px]">Account Settings</Title>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          ))}
        </div>
        <button className="btn-primary mt-4">Update</button>
      </form>
    </div>
  );
};

export default Profile;
