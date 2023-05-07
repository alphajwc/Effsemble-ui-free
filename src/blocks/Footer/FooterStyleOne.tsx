export default function FooterStyleOne() {
  return (
    <footer className="break-words bg-white dark:bg-gray-800 max-sm:p-5 sm:p-10">
      <div className="flex flex-row flex-wrap gap-10 max-sm:flex-col">
        <div className="flex flex-auto flex-col gap-5 max-sm:gap-5">
          <a href="#" className="font-bold">
            Effsemble
          </a>
          <nav className="flex flex-col gap-4 max-sm:flex-row ">
            <a href="#">Information</a>
            <a href="#">Careers</a>
            <a href="#">Sustainability</a>
          </nav>
        </div>
        <div className="flex flex-auto flex-col gap-5 max-sm:flex-col max-sm:gap-2">
          <a href="#" className="font-bold">
            Help
          </a>
          <nav className="flex flex-col gap-4 max-sm:flex-row ">
            <a href="#">FAQ</a>
            <a href="#">Return Policy</a>
            <a href="#">Accessibility</a>
          </nav>
        </div>
        <div className="flex flex-auto flex-col gap-5 max-sm:flex-col max-sm:gap-2">
          <a href="#" className="font-bold">
            Account
          </a>
          <nav className="flex flex-col gap-4 max-sm:flex-row ">
            <a href="#">Membership</a>
            <a href="#">Profile</a>
            <a href="#">Coupons</a>
          </nav>
        </div>
        <div className="flex flex-auto flex-col gap-5 max-sm:flex-col max-sm:gap-2">
          <span className="font-bold">Newsletter</span>
          <div className="flex flex-col gap-4 max-sm:flex-col ">
            <span>
              By signing up, you{"'"}ll be the first to know about our latest
              arrivals, in-store events, promotions, and more.
            </span>
            <form className="flex w-max items-center gap-2 rounded border pl-1 focus-within:border-[#5CB9DA]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
                className="dark:fill-gray-200"
              >
                <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
              </svg>
              <input
                type="email"
                className="rounded outline-none dark:bg-gray-800 max-sm:w-[8em]"
                placeholder="Type your Email"
                required={true}
              ></input>
              <input
                type="submit"
                value={"Subscribe"}
                className="bg-[#5CB9DA] p-1 text-white"
              ></input>
            </form>
          </div>
        </div>
        <div className="flex flex-auto flex-col gap-5 max-sm:gap-2">
          <a href="#" className="font-bold">
            Effsemble Social Account
          </a>
          <nav className="flex flex-row flex-wrap gap-4">
            <a href="#">Blog</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
