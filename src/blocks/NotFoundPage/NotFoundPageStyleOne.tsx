import Link from "next/link"; //require NextJs Link Component

export default function NotFoundPageStyleOne() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-10 dark:bg-gray-800">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-9xl font-bold text-black dark:text-gray-200">
          404
        </h1>
        <p className="text-5xl font-bold dark:text-gray-200">Page Not Found</p>
        <p className="text-xl ">
          Sorry, we can{"'"}t find that page. You{"'"}ll find lots to explore on
          the home page.
        </p>
      </div>
      <div className="mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="250"
          viewBox="0 96 960 960"
          width="250"
          className="dark:fill-gray-200"
        >
          <path d="M261 734q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm-30-130h60V413h-60v191Zm179 80h319v-60H410v60Zm0-171h319v-60H410v60ZM132 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h696q24 0 42 18t18 42v520q0 24-18 42t-42 18H132Zm0-60h696V316H132v520Zm0 0V316v520Z" />
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
