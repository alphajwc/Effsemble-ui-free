const menuItems = [
  /*ExpandableCodeStartArea*/
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="m800 922 28-28-75-75V707h-40v128l87 87Zm-67 93q-78 0-133-55.5T545 828q0-78 55-133.5T733 639q77 0 132.5 55.5T921 828q0 76-55.5 131.5T733 1015ZM280 436h400v-60H280v60Zm230 500H180q-25 0-42.5-17.5T120 876V276q0-25 17.5-42.5T180 216h600q25 0 42.5 17.5T840 276v329q-25-13-52-19t-55-6q-14 0-27 1.5t-26 4.5v-40H280v60h344q-36 18-64.5 46.5T513 716H280v60h211q-3 13-4.5 26t-1.5 27q0 29 6 55t19 52Z" />
      </svg>
    ),
    name: "Overview",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M284 779h60V574h-60v205Zm332 0h60V359h-60v420Zm-166 0h60V661h-60v118Zm0-205h60v-60h-60v60ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z" />
      </svg>
    ),
    name: "Analytics",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M260 426q-24.75 0-42.375-17.625T200 366V236q0-24.75 17.625-42.375T260 176h440q24.75 0 42.375 17.625T760 236v130q0 24.75-17.625 42.375T700 426H260Zm0-60h440V236H260v130ZM140 976q-24.75 0-42.375-17.625T80 916v-70h800v70q0 24.75-17.625 42.375T820 976H140ZM80 816l145-324q8-16 22.603-26 14.603-10 31.397-10h402q16.794 0 31.397 10Q727 476 735 492l145 324H80Zm260-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120 160h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120 160h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Z" />
      </svg>
    ),
    name: "Sales",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M80 936V456h200v480H80Zm300 0V216h200v720H380Zm300 0V536h200v400H680Z" />
      </svg>
    ),
    name: "Marketing",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M440 936v-60h340V572q0-58-25-111.5T688 366q-42-41-96-65.5T480 276q-58 0-112 24.5T272 366q-42 41-67 94.5T180 572v244h-20q-33 0-56.5-23.5T80 736v-80q0-23 11-40.5t29-28.5l3-53q9-73 41.5-132t81-100q48.5-41 109-63.5T480 216q66 0 126.5 22.5t108.5 64q48 41.5 80.5 100T837 533l3 52q18 9 29 26.5t11 38.5v92q0 22-11 39t-29 26v69q0 24.75-17.625 42.375T780 936H440Zm-80-290q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T390 616q0 12-8.625 21T360 646Zm240 0q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.625T630 616q0 12-8.625 21T600 646Zm-359-52q-4-59 16.5-107t55-81.5Q347 372 392 354t90-18q91 0 153 57.5T711 537q-94-1-165.5-50.5T435 358q-16 81-67.5 143.5T241 594Z" />
      </svg>
    ),
    name: "Customer Support",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M431 922H180q-24 0-42-18t-18-42V280q0-24 15.5-42t26.5-18h202q7-35 34.5-57.5T462 140q36 0 63.5 22.5T560 220h202q24 0 42 18t18 42v203h-60V280H656v130H286V280H180v582h251v60Zm189-25L460 737l43-43 117 117 239-239 43 43-282 282ZM480 276q17 0 28.5-11.5T520 236q0-17-11.5-28.5T480 196q-17 0-28.5 11.5T440 236q0 17 11.5 28.5T480 276Z" />
      </svg>
    ),
    name: "Inventory",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M300 770q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-164q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm132 328h244v-60H432v60Zm0-164h244v-60H432v60Zm0-164h244v-60H432v60ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z" />
      </svg>
    ),
    name: "Orders",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M224.118 895Q175 895 140.5 860.583 106 826.167 106 777H40V316q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.167-34.382 83.583Q780.235 895 731.118 895 682 895 647.5 860.583 613 826.167 613 777H342q0 49-34.382 83.5-34.383 34.5-83.5 34.5ZM224 835q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm507 0q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754 483h-75v148Z" />
      </svg>
    ),
    name: "Shippings",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="m479 723 43-43-74-74h182v-60H448l74-74-43-43-147 147 147 147ZM180 936q-25 0-42.5-17.5T120 876V276q0-25 17.5-42.5T180 216h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q25 0 42.5 17.5T840 276v600q0 25-17.5 42.5T780 936H180Zm300-677q14 0 24.5-10.5T515 224q0-14-10.5-24.5T480 189q-14 0-24.5 10.5T445 224q0 14 10.5 24.5T480 259Z" />
      </svg>
    ),
    name: "Returns",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M451 863h55v-52q61-7 95-37.5t34-81.5q0-51-29-83t-98-61q-58-24-84-43t-26-51q0-31 22.5-49t61.5-18q30 0 52 14t37 42l48-23q-17-35-45-55t-66-24v-51h-55v51q-51 7-80.5 37.5T343 454q0 49 30 78t90 54q67 28 92 50.5t25 55.5q0 32-26.5 51.5T487 763q-39 0-69.5-22T375 681l-51 17q21 46 51.5 72.5T451 809v54Zm29 113q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Z" />
      </svg>
    ),
    name: "Payments",
  },
];

const bottomIcons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        viewBox="0 96 960 960"
        width="25"
        className="fill-[#3f7797]"
      >
        <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5T731 696q31 14 50 41t19 65v94H160Z" />
      </svg>
    ),
  },
];
/*ExpandableCodeEndArea*/

export default function SideNavigationStyleOne() {
  return (
    <nav className="fixed flex h-screen flex-col justify-between border max-sm:[&>ul>li>a>h2]:hidden max-sm:[&>ul]:w-fit">
      <ul className="flex w-fit flex-col gap-3 py-5 px-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className=" rounded-lg hover:bg-gray-100 dark:hover:bg-slate-900"
          >
            <a
              href="#"
              className="inline-flex w-full items-center gap-5 p-2 dark:[&>svg]:fill-gray-400"
            >
              {item.icon}
              <h2 className="text-md ">{item.name}</h2>
            </a>
          </li>
        ))}
      </ul>

      <ul className=" flex flex-wrap justify-center gap-3 py-5 px-3 max-sm:flex-col">
        {bottomIcons.map((item, index) => (
          <li
            key={index}
            className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <a
              href="#"
              className="inline-flex w-full items-center gap-5 p-2 dark:[&>svg]:fill-gray-400"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
