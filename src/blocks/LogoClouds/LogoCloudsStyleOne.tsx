const data = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <rect x="5" y="5" width="40" height="40" fill="#58B19F" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
          className="dark:fill-gray-50"
        >
          NovoBite
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <circle cx="25" cy="25" r="20" fill="#F77F00" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Georgia, Times, Times New Roman, serif"
          className="dark:fill-gray-50"
        >
          Zenico
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <path d="M25,5 A20,20 0 0,1 25,45 A20,20 0 0,1 25,5" fill="#3D5A80" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Verdana, Geneva, sans-serif"
          className="dark:fill-gray-50"
        >
          LunaLux
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <polygon points="20,45 25,5 30,45" fill="#E63946" />
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Palatino, Palatino Linotype, Book Antiqua, serif"
          className="dark:fill-gray-50"
        >
          SpectraTech
        </text>
      </svg>
    ),
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        width="200"
        height="50"
      >
        <text
          x="55"
          y="35"
          fontSize="25"
          fontWeight="bold"
          fontFamily="Courier, Courier New, monospace"
          className="dark:fill-gray-50"
        >
          FizzBuzz
        </text>
        <rect
          x="7"
          y="5"
          width="40"
          height="40"
          rx="10"
          ry="5"
          fill="#BC6C25"
        />
      </svg>
    ),
  },
];

export default function LogoCloudsStyleOne() {
  return (
    <section className="space-y-10 break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <div className="text-center text-2xl font-bold">Our Trusted Partners</div>
      <div className="grid grid-cols-1 items-center gap-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {data.map((item, index) => (
          <div key={index}>{item.svg}</div>
        ))}
      </div>
    </section>
  );
}
