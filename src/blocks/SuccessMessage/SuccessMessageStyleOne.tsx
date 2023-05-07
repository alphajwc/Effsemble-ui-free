import { useState } from "react";

export default function SuccessMessageStyleOne() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  const showSuccessMessageHandler = () => {
    if (showSuccessMessage) {
      setShowSuccessMessage(false);
    } else {
      setShowSuccessMessage(true);
    }
  };

  return (
    <>
      <button
        className=" m-3 rounded-xl bg-blue-700 py-2 px-5 text-white"
        onClick={showSuccessMessageHandler}
      >
        Show Success Message
      </button>
      {showSuccessMessage && (
        <>
          <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
          <section className="pointer-events-auto fixed flex h-screen w-screen items-center justify-center">
            <div className="absolute flex w-fit flex-col items-center gap-8 rounded-xl bg-white py-5 px-10 dark:bg-gray-900 min-[0px]:max-[768px]:gap-4 min-[0px]:max-[640px]:flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                className="fill-green-600"
              >
                <path d="m421 758 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
              </svg>
              <h2 className="text-xl font-bold ">Successfully added items</h2>
              <button
                className="rounded-xl bg-blue-700 py-2 px-5 text-white"
                onClick={showSuccessMessageHandler}
              >
                Continue
              </button>
              <button
                onClick={showSuccessMessageHandler}
                className="absolute right-1 top-1 w-min"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  viewBox="0 96 960 960"
                  width="25"
                  className="fill-gray-700"
                >
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}
