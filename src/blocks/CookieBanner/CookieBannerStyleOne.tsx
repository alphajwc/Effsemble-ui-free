import { useState } from "react";

export default function CookieBannerStyleOne() {
  const [cookieBannerState, setCookieBannerState] = useState<boolean>(true);

  const acceptCookies = (): void => {
    alert("Cookies accepted");
    setCookieBannerState(false);
  };

  const blockCookies = (): void => {
    alert("Cookies blocked");
    setCookieBannerState(false);
  };

  return (
    <>
      {cookieBannerState && (
        <>
          <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
          <div className="fixed bottom-0 flex w-full items-center justify-between gap-8 overflow-y-auto bg-white py-5 px-7 shadow-lg dark:bg-gray-800 max-md:flex-col max-md:gap-4">
            <div className="flex flex-col flex-wrap gap-2">
              <p className="text-sm">
                At our website, we utilize cookies to optimize your browsing
                experience, evaluate website traffic, and support marketing
                efforts.
              </p>
              <p className="text-sm">
                To authorize the use of cookies, click{" "}
                <span className="font-bold text-blue-900 dark:text-blue-500">
                  {"Accept All"}
                </span>
                . For further details, please refer to our{" "}
                <a
                  href="#"
                  className="font-bold text-blue-900 dark:text-blue-500"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="h-min w-[9rem] rounded-lg bg-blue-600 py-2 px-3 font-bold text-white hover:bg-blue-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={acceptCookies}
              >
                Accept All
              </button>
              <button
                className="h-min w-[9rem] rounded-lg bg-red-600 py-2 px-3 font-bold text-white hover:bg-red-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={blockCookies}
              >
                Block All
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
