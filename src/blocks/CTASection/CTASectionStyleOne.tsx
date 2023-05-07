import Image from "next/image"; //require next.js image component

export default function CTASectionStyleOne() {
  return (
    <section className="flex flex-col gap-10 break-words bg-blue-100/30 p-5 dark:bg-gray-800 sm:p-10">
      <div className="flex flex-row flex-wrap justify-between gap-10">
        <div className="flex flex-auto items-center justify-center gap-5 p-5 ">
          <Image
            src="/overview.svg"
            alt="hero"
            width={640}
            height={360}
            className="dark:hidden"
          />
          <Image
            src="/dark_overview.svg"
            alt="hero"
            width={640}
            height={360}
            className="hidden dark:block"
          />
        </div>
        <div className="flex flex-auto flex-col items-center gap-5 md:gap-10">
          <h2 className="text-3xl font-bold md:text-5xl">
            Get on the waiting list
          </h2>
          <a
            href="#"
            className="text-md rounded-lg border border-gray-900 p-2 transition-all duration-500 hover:scale-110 dark:border-gray-200 md:p-5  md:text-lg"
          >
            Request early access
          </a>
          <p>Get the trial version as soon as possible</p>
        </div>
      </div>
    </section>
  );
}
