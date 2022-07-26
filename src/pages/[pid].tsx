/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Page from "components/layout/Page";
import { Fade, Flip, Zoom } from "react-reveal";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PlaceComponent from "components/base/PlaceComponent";
import Icons from "components/base/Icons";
import axios from "axios";
import { useRouter } from "next/router";
import RoomComponent from "components/base/RoomsComponent";
import TitleComponent from "components/base/TitleComponent";
import ServiceComponent from "components/base/ServiceComponent";
import HistoryComponent from "components/base/HistoryComponent";
import TestimonComponent from "components/base/TestimonComponent";
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

function Main() {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState();
  const [activeMenu, setActiveMenu] = useState("");
  const router = useRouter();
  const [index, setIndex] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  const MINUTE_MS = 5000;

  const api = {
    key: "2fe1d5212808e1e5e76af92e508fb2e3",
    base: "https://api.openweathermap.org/data/2.5/"
  };

  function helper() {
    setIndex(t => (t == 3 ? 1 : t + 1));
  }

  useEffect(() => {
    loadWeather();
    const interval = setInterval(() => {
      helper();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -200
      if (isShow) {
        setScrolled(true)
        // console.log("yes")
      } else {
        setScrolled(false)
      }
    },
    [scrolled],
     
  )

  const { locale } = router;
  const changeLanguage = () => {
    router.push("/", "/", { locale: locale == "en" ? "mn" : "en" });
  };

  const loadWeather = async () => {
    try {
      let weather = await axios.get(
        `${api.base}weather?q=${"ulaanbaatar"}&units=metric&APPID=${api.key}`
      );
      setTemp(weather.data.main.temp);
      setWeather(weather.data.weather);
    } catch (error) {
      console.log(error);
    }
  };
  let menu = [
    {
      name: "HOME",
      href: "#home"
    },
    {
      name: "ABOUT",
      href: "#about"
    },
    {
      name: "ROOMS",
      href: "#rooms"
    },
    {
      name: "SERVICE",
      href: "#service"
    },
    {
      name: "RESTAURANT & BAR",
      href: "#restaurant"
    },
    {
      name: "CONTACT",
      href: "#contact"
    }
  ];
  return (
    <div className="flex flex-col w-screen overflow-x-hidden select-none">
      <div className={"h-[120px] w-full fixed top-0 flex items-center z-50 "+(scrolled?"bg-white":"")}>
        <div className="flex flex-row container mx-auto items-center justify-between">
          <div className="flex flex-row items-center">
            <img src={"/static/icons/" + "logo.png"} className="w-[150px] mr-12" />
            {menu.map(item => {
              return (
                <div
                  className={
                    "font-constantia font-normal text-[16px] mr-5 cursor-pointer px-2 py-1 " +
                    (item.name == activeMenu
                      ? "text-brand bg-brand bg-opacity-30"
                      : "text-secondary")
                  }
                  onClick={() => {
                    setActiveMenu(item.name);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="flex items-center text-white font-constantia font-normal text-[16px]">
            <div>
              {weather[0] && (
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
                  alt="index"
                />
              )}
            </div>
            <div className="mx-1">
              {Math.round(temp)}
              <sup>o</sup>C
            </div>
            {weather[0] && <div>{weather[0].main}</div>}
          </div>

          <span
            className="text-secondary font-normal uppercase font-roboto text-[14px]"
            onClick={changeLanguage}
          >
            {locale}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className={`w-full h-screen bg-cover bg-center flex flex-col justify-center ease-in-out duration-1000 bg-header_${index}`}
        >
          <div className="bg-header_1"></div>
          <div className="bg-header_2"></div>
          <div className="bg-header_3"></div>

          {/* <div className="absolute bg-black w-full h-full bg-opacity-30 group-hover:bg-opacity-0 transition-all ease-in-out duration-1000 z-30"></div> */}
          <div className="flex flex-col justify-center w-full h-full z-40 container mx-auto items-center">
            <img
              src={"/static/icons/" + "logo.png"}
              className="h-[150px] object-contain"
            />
            <div className="h-10"></div>
            <div className="uppercase font-roboto text-secondary text-[14px]">
              Corporate Hotel Convention Centre
            </div>
            <div className="uppercase font-roboto font-bold text-secondary text-[40px]">
              Welcome to Corporate
            </div>
            <div className="h-[1px] w-28 bg-white flex my-2"></div>
            <div className="text-[12px] uppercase text-secondary">
              a place to experience and enjoy the life
            </div>
            <div className="h-10"></div>
            {/* <div className="flex flex-row gap-5 justify-center">
            <div className="flex flex-col text-secondary px-10 pt-5 bg-secondary bg-opacity-30 w-[fit-content]">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[16px]">Arrival</div>
                <img
                  src={"/static/icons/" + "ic_down.png"}
                  className="h-[7px] object-contain ml-1"
                />
              </div>
              <div className="flex flex-row items-center">
                <div className="font-roboto font-bold text-[60px] mr-2">10</div>
                <div className="font-bold text-[16px]">DEC</div>
              </div>
            </div>
            <div className="flex flex-col text-secondary px-10 pt-5 bg-secondary bg-opacity-30 w-[fit-content]">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[16px]">Arrival</div>
                <img
                  src={"/static/icons/" + "ic_down.png"}
                  className="h-[7px] object-contain ml-1"
                />
              </div>
              <div className="flex flex-row items-center">
                <div className="font-roboto font-bold text-[60px] mr-2">10</div>
                <div className="font-bold text-[16px]">DEC</div>
              </div>
            </div>
          </div> */}
          </div>
        </div>

        <div className="flex bg-body bg-cover bg-opacity-20 bg-center">
          <div className="flex flex-col w-screen container mx-auto  mb-28">
            <TitleComponent />
            <div className="grid grid-cols-3 gap-10">
              <RoomComponent />
              <RoomComponent />
              <RoomComponent />
            </div>
            <TitleComponent />
            <div className="grid grid-cols-4">
              <ServiceComponent />
              <ServiceComponent />
              <ServiceComponent />
              <ServiceComponent />
            </div>
            <TitleComponent />
            <div className="grid grid-cols-2 gap-20">
              <HistoryComponent />
              <HistoryComponent />
            </div>
          </div>
        </div>
        <div className="bg-test bg-cover bg-center">
          <div className="flex flex-col w-screen container mx-auto p-20 ">
            <div className="text-white text-[30px]">TESTIMONIALS</div>
            <div className="text-white text-[16px]">What other think about us</div>
            <div className="grid grid-cols-3 mt-12 gap-14">
              <TestimonComponent />
              <TestimonComponent />
              <TestimonComponent />
            </div>
          </div>
        </div>
        <div className="bg-cover bg-center">
          <div className="flex flex-col w-screen container mx-auto p-20 ">
            <div className="grid grid-cols-2 mt-12 gap-14">
              <div className="flex flex-col">
                <div className="text-bluely font-roboto text-left text-[16px] mb-5">
                  Арга хэмжээ
                </div>
                <div className="text-black text-[30px] text-left">
                  Enter Your Email Address for our mailing list to keep your self update.
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col mr-10">
                    <div className="text-bluely text-[36px]">21</div>
                    <div className="text-black text-[14px]">8 сар</div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="text-bluely text-[22px] text-left">
                      Suspendisse venenatis lacus vitae nisl finibus interdum
                    </div>
                    <div className="text-black text-[14px] text-left">
                      Админ / Хурлын заал
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col mr-10">
                    <div className="text-bluely text-[36px]">21</div>
                    <div className="text-black text-[14px]">8 сар</div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="text-bluely text-[22px] text-left">
                      Suspendisse venenatis lacus vitae nisl finibus interdum
                    </div>
                    <div className="text-black text-[14px] text-left">
                      Админ / Хурлын заал
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-bluely font-roboto text-left text-[16px] mb-5">
                  Арга хэмжээ
                </div>
                <div className="text-black text-[30px] text-left">
                  Enter Your Email Address for our mailing list to keep your self update.
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col mr-10">
                    <div className="text-bluely text-[36px]">21</div>
                    <div className="text-black text-[14px]">8 сар</div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="text-bluely text-[22px] text-left">
                      Suspendisse venenatis lacus vitae nisl finibus interdum
                    </div>
                    <div className="text-black text-[14px] text-left">
                      Админ / Хурлын заал
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col mr-10">
                    <div className="text-bluely text-[36px]">21</div>
                    <div className="text-black text-[14px]">8 сар</div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="text-bluely text-[22px] text-left">
                      Suspendisse venenatis lacus vitae nisl finibus interdum
                    </div>
                    <div className="text-black text-[14px] text-left">
                      Админ / Хурлын заал
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary bg-cover bg-center">
          <div className="flex flex-col w-screen container mx-auto p-20 justify-center items-center content-center">
          <img src={"/static/icons/" + "logo_black.png"} className="w-[300px]" />
          <div className="mt-20 font-roboto"><strong>Махатма Ганди гудамж 39, Сүхбаатар, Улаанбаатар, Монгол, 17011 -</strong> (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
