export default function NewsletterSectionStyleOne() {
  return (
    <section className="bg-white p-5 dark:bg-gray-800 sm:p-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-4xl font-bold">Join our newsletter</h2>
        <p className="text-xl font-light">
          Stay informed about our latest developments, announcements, and
          exclusive deals by subscribing to our newsletter. Don{"'"}t miss out
          on these special offers!
        </p>
        <div className="flex flex-col items-center gap-1">
          <form className="flex w-max items-center gap-2 rounded border border-gray-300 pl-1 focus-within:border-blue-600">
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
              placeholder="Enter your email"
              required
            ></input>
            <input
              type="submit"
              value="Subscribe"
              className="cursor-pointer bg-blue-600 p-2 text-white"
            ></input>
          </form>
          <p className="text-sm">
            Read our{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
