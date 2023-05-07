import Image from "next/image"; //require next.js image component
import { useEffect, useRef } from "react";

export default function HeaderStyleOne() {
  const dropDownNavMenuRef = useRef<HTMLUListElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropDownNavMenuRef.current &&
      !dropDownNavMenuRef.current.contains(event.target as Node) &&
      !navMenuRef.current!.contains(event.target as Node)
    ) {
      const isHidden =
        dropDownNavMenuRef.current.classList.contains("max-lg:hidden");
      if (!isHidden) {
        toggleDropdownMenu();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as any);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  });

  const toggleClass = (
    element: HTMLElement,
    className: string,
    condition: boolean
  ) => {
    if (condition) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  };

  const toggleDropdownMenu = () => {
    if (dropDownNavMenuRef.current && navMenuRef.current) {
      const isHidden =
        dropDownNavMenuRef.current.classList.contains("max-lg:hidden");
      toggleClass(dropDownNavMenuRef.current, "max-lg:hidden", !isHidden);
      toggleClass(dropDownNavMenuRef.current, "max-lg:block", isHidden);
      dropDownNavMenuRef.current.style.top =
        navMenuRef!.current.getBoundingClientRect().bottom + "px";
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white shadow-md dark:bg-gray-800">
        <div
          ref={navMenuRef}
          className="flex items-center justify-between gap-5 overflow-hidden px-10 py-2 max-lg:gap-2 max-lg:px-5"
        >
          <Image
            src="/dark_big_logo.svg"
            width={180}
            height={30}
            alt="logo"
            className="hidden dark:block"
          />
          <Image
            src="/light_big_logo.svg"
            width={180}
            height={30}
            alt="logo"
            className="block dark:hidden"
          />

          <ul
            ref={dropDownNavMenuRef}
            className="flex flex-wrap gap-5 bg-white dark:bg-gray-800 max-lg:fixed max-lg:left-0 max-lg:hidden max-lg:w-full max-lg:flex-col max-lg:gap-0 max-lg:px-2 lg:block"
          >
            {[
              "Home",
              "About Us",
              "Services",
              "Products",
              "Blog",
              "Contact Us",
              "FAQs",
              "Testimonials",
            ].map((label, index) => (
              <li
                key={index}
                className="inline-flex rounded-sm hover:bg-gray-100 dark:hover:bg-slate-900 max-lg:w-screen max-lg:border-b"
              >
                <a href="#" className="w-full px-5 py-2">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="inline-flex items-center gap-1">
            <button className="inline-flex items-center gap-5 rounded-lg border px-2 py-1 text-black hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
                className="fill-black dark:fill-gray-200"
              >
                <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z" />
              </svg>
              Login
            </button>
            <button
              onClick={toggleDropdownMenu}
              className="hidden rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-slate-900 max-lg:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
                className="fill-black dark:fill-gray-200"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
