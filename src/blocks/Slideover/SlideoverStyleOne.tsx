import { useRef, useState } from "react";

export default function SlideoverStyleOne() {
  const [isSlideoverOpen, setIsSlideoverOpen] = useState(false);

  const toggleSlideover = () => {
    setIsSlideoverOpen(!isSlideoverOpen);
  };

  const closeSlideover = () => {
    setIsSlideoverOpen(false);
  };
  const slideOverPanelRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="p-10">
        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={toggleSlideover}
        >
          Toggle Slideover
        </button>
        <div
          className={`fixed inset-0 z-50 overflow-hidden ${
            isSlideoverOpen ? "" : "invisible"
          }`}
          onClick={closeSlideover}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-y-0 right-0 flex max-w-full transform-gpu pl-10 duration-1000 ease-in-out ${
                isSlideoverOpen ? "" : "translate-x-full"
              }`}
            >
              <div
                className="w-screen max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-lg dark:bg-gray-900">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                        Slideover Section Title
                      </h2>
                      <button
                        className="ml-3 inline-flex h-7 w-7 items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={toggleSlideover}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 96 960 960"
                          width="20"
                          className="flex-none fill-current"
                        >
                          <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="relative p-5">
                    <p>Slideover Section Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
