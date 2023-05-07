import { useState } from "react";

export default function BannerSectionStyleOne() {
  const [bannerState, setBannerState] = useState(true);

  return (
    <>
      {bannerState && (
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between border-b bg-white px-5 py-3 shadow-sm dark:bg-gray-800 sm:px-7">
          <h2 className="text-sm font-medium sm:text-base">
            Boost Your Conversion Rates and Drive More Sales with Our Banner
            Sections. Give Them a Try Today!
          </h2>
          <button
            onClick={() => setBannerState(false)}
            className="ml-3 flex h-6 w-6 items-center justify-center rounded-full focus:outline-none dark:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="12"
              width="12"
              viewBox="0 0 24 24"
            >
              <path d="M5.5 5.5L12 12l6.5-6.5 1.5 1.5L13.5 13l7 7-1.5 1.5-7-7-7 7L4 20.5l7-7-7-7z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
