/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import router from "next/router";

let menu = [
  // { href: "#features", label: "Features" },
  { href: "#about_us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact Us" }
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export default function Footer () {
  return (
    <footer className=" relative bg-title">
      <div className="h-[1px] w-screen bg-gray-100"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">


        <div className="bg-white bg-repeat h-auto">
          <div className="container mx-auto flex flex-col py-10 items-center align-middle text-center content-center justify-center">
            {/* <div className="flex flex-shrink-0">
              <img
                className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-center"
                src={"/static/images/" + "ic_pin.png"}
                alt="poster_2"
              />
            </div> */}
            <div className="text-lg mt-5 font-medium lg:text-left">
              2108 Adams Avenue, San Leandro, CA, 94577
              <br />
              510-309-6812 • hello@mazalai.com
            </div>
            {/* <button className="bg-primary text-white rounded-full w-32 px-3 py-2 mt-5 font-bold text-lg">
            Get Now
          </button> */}
          </div>
        </div>


        <div className="justify-center items-center">
          <div className="flex flex-col md:flex-row md:justify-center items-center">
            {menu.map((item, index) => {
              return (
                <Link href={item.href} key={"menu_item_" + item.label}>
                  <div className={"flex text-lg cursor-pointer font-bold md:mr-7"}>
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* <div className="flex flex-row mt-5 justify-center">
            <div className="flex flex-shrink-0 mr-5">
              <img
                className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_facebook.png"}
                alt="poster_2"
              />
            </div>
            <div className="flex flex-shrink-0 mr-5">
              <img
                className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_twitter.png"}
                alt="poster_2"
              />
            </div>
            <div className="flex flex-shrink-0 mr-5">
              <img
                className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_instagram.png"}
                alt="poster_2"
              />
            </div>
            <div className="flex flex-shrink-0 mr-5">
              <img
                className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_linkedin.png"}
                alt="poster_2"
              />
            </div>
            <div className="flex flex-shrink-0 mr-5">
              <img
                className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_youtube.png"}
                alt="poster_2"
              />
            </div>
            <button className="bg-primary uppercase font-bold text-lg text-title hover:text-title py-2 px-3 text-sm rounded-sm mr-5">
            Facebook
          </button>
          <button className="bg-primary uppercase font-bold text-title hover:text-title py-1 px-3 text-sm rounded-sm">
            Instagram
          </button>
          </div> */}
        </div>
      </div>
      <div className="bg-white flex flex-col mb-10 mt-0">
        <div className="flex flex-row mt-0 justify-center">
          <div className="mt-0 font-serif font-light">
            © 2022 Mazalai LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
