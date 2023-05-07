import React from "react";
import Image from "next/image"; //require the nextJS image component
const data = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <rect x="5" y="5" width="40" height="40" fill="#58B19F" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          className="fill-white dark:fill-gray-300"
        >
          NovoBite
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <circle cx="25" cy="25" r="20" fill="#F77F00" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Georgia, Times, Times New Roman, serif"
          className="fill-white dark:fill-gray-300"
        >
          Zenico
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <path d="M25,5 A20,20 0 0,1 25,45 A20,20 0 0,1 25,5" fill="#3D5A80" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Verdana, Geneva, sans-serif"
          className="fill-white dark:fill-gray-300"
        >
          LunaLux
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <polygon points="20,45 25,5 30,45" fill="#E63946" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Palatino, Palatino Linotype, Book Antiqua, serif"
          className="fill-white dark:fill-gray-300"
        >
          SpectraTech
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Courier, Courier New, monospace"
          className="fill-white dark:fill-gray-300"
        >
          FizzBuzz
        </text>
        <rect
          x="7"
          y="5"
          width="40"
          height="40"
          rx="10"
          ry="5"
          fill="#BC6C25"
        />
      </svg>
    ),
  },
];

export default function HeroSectionStyleOne() {
  return (
    <section className="h-fit w-full bg-[url('/HeroSection1.svg')] dark:bg-[url('/dark_HeroSection1.svg')]">
      <div className="container mx-auto flex flex-auto flex-col items-center justify-center gap-10 p-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="flex flex-col items-center gap-10">
            <h2 className=" text-5xl font-bold text-white dark:text-gray-300">
              We invest in the world’s potential
            </h2>
            <p className="text-light text-xl text-white dark:text-gray-300">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="flex flex-auto flex-row items-center justify-center gap-10">
              <form className="border-1 flex w-max items-center gap-2 rounded  bg-white pl-4  dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 96 960 960"
                  width="20"
                  className="fill-gray-500"
                >
                  <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                </svg>
                <input
                  type="email"
                  className="rounded px-2 outline-none dark:bg-gray-800 max-sm:w-[8em]"
                  placeholder="Type your Email"
                  required={true}
                ></input>
                <input
                  type="submit"
                  value={"Subscribe"}
                  className="bg-[#5CB9DA] p-3 text-white dark:bg-slate-600 dark:text-gray-300"
                ></input>
              </form>
            </div>
          </div>
          <Image
            src="/overview.svg"
            alt="hero_image"
            height={960}
            width={540}
            className="dark:hidden"
          />
          <Image
            src="/dark_overview.svg"
            alt="dark_hero_image"
            height={960}
            width={540}
            className="hidden dark:block"
          />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {data.map((item, index) => (
            <div key={index}>{item.svg}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
