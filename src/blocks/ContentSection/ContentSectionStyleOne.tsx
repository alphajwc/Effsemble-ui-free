import Image from "next/image"; // require the Next.js Image component

export default function ContentSectionStyleOne() {
  return (
    <section className="break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl font-bold">Our Journey</h2>

          <p className="text-lg font-light">
            We began as a passionate team of designers and developers, all
            sharing a love for creating visually stunning and highly functional
            digital experiences. Over time, we have grown into a fully-fledged
            agency while maintaining our core values and relentless pursuit of
            excellence.
          </p>
          <p className="text-lg font-light">
            Our mission extends beyond simply producing beautiful websites and
            captivating designs. We are devoted to crafting solutions that
            address your distinct needs and goals. Whether it{"'"}s improving
            conversion rates, enhancing user experience, or introducing a new
            product, our team is dedicated to ensuring your success.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src="/overview.svg"
            alt="product illustration"
            width={1920}
            height={1080}
            className="dark:hidden"
          />
          <Image
            src="/dark_overview.svg"
            alt="product illustration"
            width={1920}
            height={1080}
            className="hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
}
