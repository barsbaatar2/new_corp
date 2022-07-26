/* eslint-disable @next/next/no-img-element */
import Head, { HeadProps } from "components/layout/Head";
import Header from "components/layout/Header";
import React, { PropsWithChildren, HTMLAttributes, useState, useEffect } from "react";
import Footer from "./Footer";
import { RecoilRoot, useRecoilState } from "recoil";
import { collapsedState } from "../../recoils/states";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

type PageProps = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & {
    mainClassName?: string;
  };

let menu = [
  // { href: "#features", label: "Features" },
  { href: "#about_us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact Us" }
];

function Page (props: PageProps) {
  const [myCollapsedState, setCollapsedState] = useRecoilState(collapsedState);
  const [scrolled, setScrolled] = useState(false);
  const [sideBar, setSideBar] = React.useState(false);

  // useEffect(()=>{
  //   setSideBar(myCollapsedState)
  // },[myCollapsedState])

  // useEffect(()=>{
  //   setCollapsedState(sideBar)
  // },[sideBar])

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < -1000;
      if (isShow) {
        setScrolled(true);
        // console.log("yes")
      } else {
        setScrolled(false);
      }
    },
    [scrolled]
  );
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={
        (myCollapsedState ? "overflow-hidden " : " ") + "relative overflow-x-hidden"
      }
      style={{ scrollBehavior: "smooth" }}
    >
      <Head {...props} />
      <Header />
      <main className={"flex-grow flex items-center justify-center "}>
        <div className={"container mx-auto h-full " + props.className}>
          {props.children}
        </div>
      </main>
      <div className="flex flex-col mt-5 justify-center bg-white p-2 rounded-2xl fixed z-50 right-4 top-40">
        <div className="flex flex-shrink-0 mb-2">
          <img
            className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
            src={"/static/images/" + "ic_facebook.png"}
            alt="poster_2"
          />
        </div>
        <div className="flex flex-shrink-0 mb-2">
          <img
            className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
            src={"/static/images/" + "ic_twitter.png"}
            alt="poster_2"
          />
        </div>
        <div className="flex flex-shrink-0 mb-2">
          <img
            className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
            src={"/static/images/" + "ic_instagram.png"}
            alt="poster_2"
          />
        </div>
        <div className="flex flex-shrink-0 mb-2">
          <img
            className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
            src={"/static/images/" + "ic_linkedin.png"}
            alt="poster_2"
          />
        </div>
        <div className="flex flex-shrink-0 mb-0">
          <img
            className="lg:h-10 lg:w-10 w-8 h-8 object-cover relative left-0 float-right"
            src={"/static/images/" + "ic_youtube.png"}
            alt="poster_2"
          />
        </div>
      </div>
      {/* <img
        onClick={() => { setSideBar(!sideBar) }}
        className={" bottom-5 right-5 cursor-pointer"}
        src={"/static/icons/" + "ic_to_top.svg"}
        alt={"ic_menu.svg"}
        width={40}
        height={40} /> */}
      <Footer />
      <Sidebar {...{ myCollapsedState, setCollapsedState }} />
    </div>
  );
}
export default Page;

function Sidebar ({ bool: myCollapsedState = false, setCollapsedState }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      {myCollapsedState && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0
            }}
            exit={{
              x: "100%"
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-primary text-white shadow-lg top-0 right-0 w-full max-w-sm h-screen p-5 z-50 items-center"
          >
            <div className="relative h-full">
              <button
                onClick={() => setCollapsedState(myCollapsedState => !myCollapsedState)}
                className="bg-white text-black h-8 w-8 block mb-2 rounded-full absolute"
              >
                &times;
              </button>
              <div className="w-auto h-full justify-center flex flex-col items-center">
                {menu.map(item => {
                  return (
                    <div
                      key={"menu_item_" + item.label}
                      onClick={() => {
                        setCollapsedState(myCollapsedState => !myCollapsedState);
                        router.push(item.href);
                      }}
                    >
                      <div className="ml-7 text-xl cursor-pointer font-bold hover:font-medium">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            // onClick={() => { setCollapsedState((myCollapsedState) => !myCollapsedState); }}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          /> */}
        </>
      )}
    </AnimatePresence>
  );
}
