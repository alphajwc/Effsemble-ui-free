import Link from "next/link"; //require NextJs Link component

export default function InternalServerErrorPageStyleOne() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10 dark:bg-gray-800">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-9xl font-bold text-black dark:text-gray-200">
          500
        </h1>
        <p className="text-5xl font-bold dark:text-gray-200">
          Internal Server Error
        </p>
        <p className="text-xl ">
          Sorry, there were some thenical issues while processing your request
        </p>
      </div>
      <div className="inline-flex items-center gap-5 py-10 text-lg">
        <h2>Server Status</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          viewBox="0 96 960 960"
          width="25"
          className="fill-green-500"
        >
          <path d="m421 758 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
        </svg>
      </div>
      <Link
        href="#"
        className="mt-10 rounded-md bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 dark:bg-blue-800 hover:dark:bg-blue-900"
      >
        Return to Home
      </Link>
    </div>
  );
}
