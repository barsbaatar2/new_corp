/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Page from "components/layout/Page";
import Image from "next/image";
import { Fade, Flip, Zoom } from "react-reveal";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PlaceComponent from "components/base/PlaceComponent";
import Icons from "components/base/Icons";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from "next";

function Index() {
  return (
    <div className="">
      {" "}
      <div className="w-screen h-screen bg-primary md:pr-[74px] pr-[50px] select-none overflow-y-hidden">
        <div className="grid md:grid-cols-4 grid-cols-2 w-full h-full">
          <PlaceComponent
            image="place_1.png"
            name="The Corporate Hotel and Convention Centre"
            phone="7000 2030"
            href="/1"
          />
          <PlaceComponent
            image="place_2.png"
            name="The Corporate Hotel Ulaanbaatar"
            phone="1133 4411"
            href="/2"
          />
          <PlaceComponent
            image="place_3.png"
            name="The Corporate Hotel & Resort Nukht"
            phone="7701 5555"
            href="/3"
          />
          <PlaceComponent
            image="place_4.png"
            name="The Corporate at Zaisan"
            phone="7735 3399"
            href="/4"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center absolute top-16 right-4 md:right-5 gap-5 md:gap-8" >
        <Icons name="ic_fb.png" size="30"/>
        <Icons name="ic_ig.png" size="30"/>
        <Icons name="ic_tw.png" size="30"/>
        <Icons name="ic_yt.png" size="30"/>
      </div>
    </div>
  );
}
export default Index;



export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
      // Will be passed to the page component as props
    }
  }
}
