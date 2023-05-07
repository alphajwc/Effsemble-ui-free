import { useState } from "react";

export default function PopUpStyleOne() {
  const [showPopUp, setShowPopUp] = useState(true);

  const showPopUpHandler = () => {
    if (showPopUp) {
      setShowPopUp(false);
    } else {
      setShowPopUp(true);
    }
  };

  return (
    <>
      {showPopUp && (
        <>
          <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
          <section className="pointer-events-auto fixed flex h-screen w-screen items-center justify-center">
            <div className="absolute  flex w-fit flex-col items-center gap-5 rounded-xl bg-white py-5 px-10 dark:bg-gray-900 min-[0px]:max-[768px]:gap-4 min-[0px]:max-[640px]:flex-col">
              <div className="inline-flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 96 960 960"
                  width="48"
                  className="flex-none fill-blue-500"
                >
                  <path d="M453 776h60V536h-60v240Zm26.982-314q14.018 0 23.518-9.2T513 430q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447 430q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Z" />
                </svg>
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Account Information</h2>
                  <p className="">
                    Your account information is displayed below:
                  </p>
                  <ul className="list-disc pl-4">
                    <li>Username: JohnDoe</li>
                    <li>Email: johndoe@example.com</li>
                    <li>Account Type: Premium</li>
                    <li>Subscription Expiration: 2023-09-30</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-5">
                <button
                  className="w-[8rem] rounded-lg border  py-2  hover:bg-blue-700 hover:text-white"
                  onClick={showPopUpHandler}
                >
                  Cancel
                </button>
                <button
                  className="w-[8rem] rounded-lg  bg-blue-700 py-2  text-white hover:bg-blue-600"
                  onClick={showPopUpHandler}
                >
                  Continue
                </button>
              </div>

              <button
                onClick={showPopUpHandler}
                className="absolute right-1 top-1 w-min"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  viewBox="0 96 960 960"
                  width="25"
                  className="rounded-lg fill-gray-700 hover:bg-gray-100"
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
