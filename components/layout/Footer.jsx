"use client";

import { useState } from "react";
import Title from "../ui/Title";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pb-6 pt-16">
        <div className="flex flex-wrap justify-center gap-y-6 text-center md:justify-between md:gap-y-0 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="mt-3 flex flex-col gap-y-2">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="ml-2 inline-block">Location</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="ml-2 inline-block">Call +01 1234567890</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="ml-2 inline-block">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-2">
              <a
                href=""
                className="grid h-8 w-8 place-content-center rounded-full bg-white text-secondary "
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href=""
                className="grid h-8 w-8 place-content-center rounded-full bg-white text-secondary"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href=""
                className="grid h-8 w-8 place-content-center rounded-full bg-white text-secondary"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href=""
                className="grid h-8 w-8 place-content-center rounded-full bg-white text-secondary"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href=""
                className="grid h-8 w-8 place-content-center rounded-full bg-white text-secondary"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="mt-3 flex flex-col gap-y-2">
              <div>
                <span className="ml-2 inline-block">Everyday</span>
              </div>
              <div>
                <span className="ml-2 inline-block">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
