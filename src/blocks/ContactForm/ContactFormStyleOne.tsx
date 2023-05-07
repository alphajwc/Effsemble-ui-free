import React, { useState } from "react";

interface FormData {
  email: string;
  message: string;
}

function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  formData: FormData
) {
  e.preventDefault();
  // Add your logic to save formData to the database here
}

export default function ContactFormStyleOne() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex flex-col items-center justify-center break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <div className="flex w-full max-w-4xl flex-col gap-10">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
          Contact Us
        </h2>
        <p className="text-2xl font-light text-gray-800 dark:text-gray-400">
          Do you have a technical problem that requires assistance? Do you want
          to provide feedback regarding a beta feature? Are you in need of
          information about our Business plan? Please feel free to inform us.
        </p>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => handleFormSubmit(e, formData)}
        >
          <label className="text-gray-900 dark:text-gray-200" htmlFor="email">
            Your email
          </label>
          <input
            className="rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:focus:border-gray-200"
            type="email"
            id="email"
            name="email"
            placeholder="John"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="text-gray-900 dark:text-gray-200" htmlFor="message">
            Your message
          </label>
          <textarea
            className="rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:focus:border-gray-200"
            id="message"
            name="message"
            rows={5}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600 focus:outline-none dark:focus:border-gray-200"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
