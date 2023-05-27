"use client";
import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 left-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        className="absolute -bottom-12 right-1/2 mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-20">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>

      <Slider {...settings}>
        <CustomerItem imgSrc="/images/client1.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client2.jpg" />
      </Slider>
    </div>
  );
};

export default Customers;
