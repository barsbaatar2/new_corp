/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Page from "components/layout/Page";
import Image from "next/image";
import { Fade, Flip, Zoom } from "react-reveal";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Index () {
  const [showModal, setShowModal] = React.useState(false);

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse (event) {
    x.set(event.pageX);
    y.set(event.pageY);
  }

  const team = [
    [
      {
        name: "Munkh Khadbaatar",
        image: "ic_person.png",
        desc: "CEO & Founder"
      },
      {
        name: "Narangarig Ganbold",
        image: "ic_person.png",
        desc: "CTO"
      },
      {
        name: "Shijir Urjinee",
        image: "ic_person.png",
        desc: "Head of Development"
      },
      {
        name: "Jargalsuren Mandakh",
        image: "ic_person.png",
        desc: "CPO"
      },
      {
        name: "Battsetseg Chuluunbaatar",
        image: "ic_person.png",
        desc: "CFO"
      },
      {
        name: "Erdenebat Enkhjargal",
        image: "ic_person.png",
        desc: "UX & UI Designer"
      }
    ],
    [
      {
        name: "Barsbaatar Khosbayar",
        image: "ic_person.png",
        desc: "Full-Stack Developer"
      },
      {
        name: "Tsogtgerel Amar",
        image: "ic_person.png",
        desc: "Full-Stack Developer"
      },
      {
        name: "Aigerym Adilmurat",
        image: "ic_person.png",
        desc: "Growth Manager"
      },
      {
        name: "Bayarmagnai Lkhagva-Ochir",
        image: "ic_person.png",
        desc: "Full-Stack Developer"
      },
      {
        name: "Otgonchuluu Bayarsaikhan",
        image: "ic_person.png",
        desc: "Front-End Developer"
      },
      {
        name: "Dolgorsuren Sangidorj",
        image: "ic_person.png",
        desc: "Sales Manager"
      }
    ]
  ];

  const [page, setPage] = useState(0);

  return (
    <Page className="flex flex-col items-center justify-center">
      {/* -------------------- Home --------------- */}

      <div
        id="home"
        className="flex flex-col h-[900px] w-screen p-6 pt-24 bg-body_1 bg-cover items-center justify-center"
      >
        <div className="flex relative w-full container mx-auto z-10">
          <div className="flex-1 w-full">
            <div className="flex flex-col justify-start">
              <div className="text-left text-3xl md:text-5xl font-black text-white">
                Safely Manage
                <br />
                Your Systems From
                <br />
                Anywhere.
              </div>
              <div className="text-left text-lg mt-5 font-medium text-white">
                Various versions have evolved over the years, sometimes
              </div>
              <button className="bg-white text-lg text-primary font-bold rounded-full w-40 px-1 py-2 mt-10">
                See it in action
              </button>
            </div>
          </div>
          <div className="flex-1 flex-shrink-0 hidden md:flex"></div>
        </div>
        {/* <Fade right>
          <img
            className="absolute hidden md:flex  right-0 md:left-1/2 md:h-full h-80 p-0 md:p-10 w-auto z-0 object-cover float-right max-h-[790px]"
            src={"/static/images/" + "header_Illustration.svg"}
            alt="poster_2"
          />
        </Fade> */}
      </div>

      {/* -------------------- Features --------------- */}

      <div className="bg-white bg-repeat h-auto w-screen" id="about_us">
        <div className="container mx-auto flex flex-col p-240 py-20 md:py-40 items-center align-middle text-center content-center justify-center">
          <div className="text-4xl md:text-5xl mb-10 font-medium">About Us</div>
          <Image
            src={"/static/images/" + "divider.svg"}
            alt={"ic_divider.svg"}
            width={190}
            height={20}
          />

          <div className="text-lg mb-10 font-medium">
            {/* On the other hand, we denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure. */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <Fade left>
              <div className="flex flex-col w-full bg-primary bg-opacity-5 py-5 lg:py-16 px-5 lg:px-24 justify-center items-center rounded-3xl">
                <div className="font-medium text-2xl ">Our Story</div>
                <div className="mt-10 font-medium text-lg ">
                  With more than a decade of marketing experience, Mazalai has become the
                  reference for all that’s digital, web design and branding.
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="flex flex-col w-full bg-primary bg-opacity-5 py-5 lg:py-16 px-5 lg:px-24 justify-center items-center rounded-3xl">
                <div className="font-medium text-2xl ">Our Vision</div>
                <div className="mt-10 font-medium text-lg ">
                  We are a forward-thinking team of designers and developers driven by
                  passion — and fuelled by curiosity.
                </div>
              </div>
            </Fade>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full mt-20">
            <Fade left>
              <div className="flex flex-col w-full border-2 border-gray-100 py-5 md:py-5 px-5 md:px-5 justify-center items-center rounded-3xl">
                <div className="font-medium text-lg  text-description">Founded</div>
                <div className="mt-5 text-5xl font-bold ">2020</div>
              </div>
            </Fade>
            <Fade right>
              <div className="flex flex-col w-full border-2 border-gray-100 py-5 md:py-5 px-5 md:px-5 justify-center items-center rounded-3xl ">
                <div className="font-medium text-lg  text-description">Our Client</div>
                <div className="mt-5 text-5xl  font-bold">3056</div>
              </div>
            </Fade>
            <Fade left>
              <div className="flex flex-col w-full border-2 border-solid border-gray-100 py-5 md:py-5 px-5 md:px-5 justify-center items-center rounded-3xl">
                <div className="font-medium text-lg  text-description">Download</div>
                <div className="mt-5 text-5xl  font-bold">8756</div>
              </div>
            </Fade>
            <Fade right>
              <div className="flex flex-col w-full border-2 border-gray-100 border-solid py-5 md:py-5 px-5 md:px-5 justify-center items-center rounded-3xl">
                <div className="font-medium text-lg  text-description">Team Member</div>
                <div className="mt-5 text-5xl font-bold">56</div>
              </div>
            </Fade>
          </div>
          {/* <button className="bg-primary text-lg  text-white rounded-full w-40 px-1 py-2 mt-10 font-extrabold">
            See it in action
          </button> */}
        </div>
      </div>

      {/* -------------------- About Us --------------- */}

      <div className="bg-body_2 bg-cover h-auto w-screen" id="products">
        <div className="container mx-auto flex flex-col p-240 py-20 md:py-40 items-center align-middle text-center content-center justify-center">
          <div className="text-4xl md:text-5xl mb-10 text-white font-medium">
            Our Products{" "}
          </div>
          <Image
            src={"/static/images/" + "divider_white.svg"}
            alt={"ic_divider.svg"}
            width={190}
            height={20}
          />

          <div className="text-xl text-white font-medium mt-10 mb-28">
            On the other hand, we denounce with righteous indignation and dislike men who
            are so beguiled and demoralized by the charms of pleasure.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 w-full">
            <Fade left>
              <div className="flex flex-col w-full bg-white py-10 md:py-20 px-10 justify-center items-center rounded-3xl"         onMouseMove={handleMouse}
>

                <motion.div className="flex flex-shrink-0  px-10 lg:min-h-[50%] items-center">
                  <img
                    className="h-16 w-auto object-contain relative left-0 float-right"
                    src={"/static/images/" + "ic_boxly.png"}
                    alt="poster_2"
                  />
                </motion.div>
                <div className="mt-10 text-lg font-medium">
                  With more than a decade of marketing experience, Mazalai has become the
                  reference for all that’s digital, web design and branding.
                </div>
                <button className="bg-primary text-lg text-white rounded-full w-40 px-1 py-2 mt-10 font-bold">
                  See it in action
                </button>
              </div>
            </Fade>
            <Fade right>
              <div className="flex flex-col w-full bg-white py-10 md:py-20 px-10 justify-center items-center rounded-3xl">
                <div className="flex flex-shrink-0 px-10 lg:min-h-[50%] items-center">
                  <img
                    className="h-14 w-auto object-contain relative left-0 float-right"
                    src={"/static/images/" + "ic_cargo.png"}
                    alt="poster_2"
                  />
                </div>
                <div className="mt-10 font-medium text-lg ">
                  With more than a decade of marketing experience, Mazalai has become the
                  reference for all that’s digital, web design and branding.
                </div>
                <button className="bg-primary text-lg text-white rounded-full w-40 px-1 py-2 mt-10 font-bold">
                  See it in action
                </button>
              </div>
            </Fade>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-20">
            {[...Array(6)].map((item, index) => {
              return (
                <Flip top key={"grid" + index}>
                  <div className="flex flex-col w-full py-5 px-10 justify-center items-center">
                    <div className="flex flex-shrink-0">
                      <img
                        className="md:h-20 md:w-20 w-16 h-16 object-cover relative left-0 float-right"
                        src={"/static/images/" + "ic_bullet.svg"}
                        alt="poster_2"
                      />
                    </div>

                    <div className="mt-10 text-white font-medium  text-lg">
                      We denounce with righteous indignation and dislike men who are so
                      beguiled and demoralized
                    </div>
                  </div>
                </Flip>
              );
            })}
          </div>
          <Zoom top>
            <div className="flex flex-col md:flex-row bg-white w-full p-5 md:p-16 mt-20  rounded-3xl">
              <div className="md:flex-2">
                <div className="flex flex-col md:pr-10">
                  <div className="text-3xl text-center md:text-left font-extrabold">
                    Add dynamic with built
                    <br />
                    applications
                  </div>
                  <div className="text-lg text-center md:text-left mt-10 font-medium">
                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure.
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 mt-10 md:mt-0 items-center justify-center">
                <button className="bg-primary text-lg text-white rounded-full w-40 px-1 py-2 font-bold">
                  See it in action
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      <div className="bg-white bg-repeat h-auto w-screen " id="team">
        <div className="container mx-auto flex flex-col p-240 py-20 md:py-40 items-center align-middle text-center content-center justify-center">
          <div className="text-4xl md:text-5xl mb-10 font-medium">Our Team</div>
          <Image
            src={"/static/images/" + "divider.svg"}
            alt={"ic_divider.svg"}
            width={190}
            height={20}
          />

          {/* <div className="text-xl font-medium mt-10 mb-10">
            On the other hand, we denounce with righteous indignation and dislike men who
            are so beguiled and demoralized by the charms of pleasure.
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10">
            {team[page].map((item, index) => {
              return (
                <Flip top key={"grid" + page + index}>
                  <div className="flex flex-col w-full py-12 px-10 justify-center items-center rounded-2xl bg-hero-pattern border-2 border-gray-100">
                    <div className="flex flex-shrink-0">
                      <img
                        className="md:h-20 md:w-20 w-16 h-16 object-cover relative left-0 float-right"
                        src={"/static/images/" + "ic_person.png"}
                        alt="poster_2"
                      />
                    </div>

                    <div className="mt-10 text-black font-bold  text-xl">{item.name}</div>
                    <div className="mt-2 text-black text-xl">{item.desc}</div>
                  </div>
                </Flip>
              );
            })}
          </div>
          <div className="flex flex-row mt-5">
            <div
              className="flex flex-shrink-0 mr-5"
              onClick={() => {
                setPage(0);
              }}
            >
              <img
                className="md:h-5 md:w-5 w-5 h-5 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_dot" + (page == 0 ? "" : "_not") + ".png"}
                alt="poster_2"
              />
            </div>{" "}
            <div
              className="flex flex-shrink-0"
              onClick={() => {
                setPage(1);
              }}
            >
              <img
                className="md:h-5 md:w-5 w-5 h-5 object-cover relative left-0 float-right"
                src={"/static/images/" + "ic_dot" + (page == 1 ? "" : "_not") + ".png"}
                alt="poster_2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Contact Us --------------- */}

      <div
        className="bg-primary bg-opacity-10 bg-repeat h-auto w-screen flex items-center justify-center"
        id="contact"
      >
        <div className="container">
          <Zoom top>
            <div className="flex flex-col md:flex-row bg-white w-full p-5 md:p-16 mt-20 mb-20 rounded-3xl">
              <div className="md:flex-2">
                <div className="flex flex-col md:pr-10">
                  <div className="text-3xl text-center md:text-left font-extrabold">
                    Add dynamic with built
                    <br />
                    applications
                  </div>
                  <div className="text-lg text-center md:text-left mt-10 font-medium">
                    On the other hand, we denounce with righteous indignation and dislike
                    men who are so beguiled and demoralized by the charms of pleasure.
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 mt-10 md:mt-0 items-center justify-center">
                <button
                  className="bg-primary text-lg text-white rounded-full w-40 px-1 py-2 font-bold"
                  id="buttonmodal"
                  onClick={() => setShowModal(true)}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <div
              className="flex flex-col p-3 md:p-10 bg-white md:mx-0 mx-5 justify-center items-center  rounded-3xl"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <div className="text-2xl md:text-4xl mb-5 font-medium">Get In Touch</div>
              <img
                src={"/static/images/" + "divider.svg"}
                alt={"ic_divider.svg"}
                width={90}
                height={10}
              />

              <div className="text-base font-medium mt-10 mb-10 text-lg">
                Please contact us if you still have questions or suggestions
              </div>
              <input
                className="appearance-none block w-full bg-[#F6F7FF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="username"
                placeholder="Your Name"
              />
              <input
                className="appearance-none block w-full bg-[#F6F7FF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="appearance-none block w-full bg-[#F6F7FF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="textarea"
                placeholder="Message"
              />
              <button
                className="bg-primary text-white rounded-full w-32 px-3 py-2 mt-5 font-bold text-lg"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => {
              setShowModal(false);
            }}
          ></div>
        </>
      ) : null}
    </Page>
  );
}
export default Index;
