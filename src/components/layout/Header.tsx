import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useRecoilState } from 'recoil';
import { collapsedState } from '../../recoils/states'
import { useRouter } from "next/dist/client/router";

let menu = [
  // { href: "#features", label: "Features" },
  { href: "#about_us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact Us" },
];

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [myCollapsedState, setCollapsedState] = useRecoilState(collapsedState);

  // console.log(router.pathname)

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

  // if (isCollapsed) {
  //   setCollapsedState(false)
  // }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <header className={`fixed top-0 z-40 w-screen bg-cover bg-white filter drop-shadow`}>
      <nav className="container flex flex-wrap items-center justify-between py-3 mx-auto w-full">
        <div className="h-[50px] relative flex justify-between w-full md:w-full md:relative md:flex md:justify-between items-center">

          <Link href="#home" >
            <div className="h-auto w-auto relative items-center justify-start cursor-pointer" onClick={()=>{scrollToTop()}}>
              <img
                src={"/static/images/" + "logo.svg"}
                alt={"logo.svg"}
                width={140}
                height={28} />
            </div>
          </Link>
          <div className="w-auto justify-end felx-row hidden md:flex">
            {
              menu.map((item) => {
                return <Link href={item.href} key={"menu_item_" + item.label}><div className="ml-10 md:text-md lg:text-lg cursor-pointer hover:text-primary font-bold">{item.label}</div></Link>
              })
            }
          </div>
          <button
            className=" flex text-base outline-none focus:outline-none h-auto items-center md:hidden"
            type="button"
            onClick={() => { setIsCollapsed(!isCollapsed); setCollapsedState(!myCollapsedState) }}
          >
            <Image
              src={"/static/icons/" + "ic_menu.svg"}
              alt={"ic_menu.svg"}
              width={30}
              height={30} />
          </button>
        </div>
      </nav>

      {/* <div className={`${isCollapsed ? "hidden" : "flex"} absolute h-full w-full items-center justify-center`}>
        <div className="w-auto justify-end pr-20 md:pr-40">
          {
            menu.map((items) => {
              return
            })
          }
        </div>
      </div> */}

    </header>
  );
}

export default Header;
