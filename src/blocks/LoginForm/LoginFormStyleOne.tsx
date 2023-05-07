import React, { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <>
    <label className="text-gray-900 dark:text-gray-200" htmlFor={id}>
      {label}
    </label>
    <input
      className="rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:focus:border-gray-200"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </>
);

function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  formData: FormData
) {
  e.preventDefault();
  // Add your logic to authenticate the user here
}

export default function LoginFormStyleOne() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex flex-col items-center justify-center break-words bg-white p-5 dark:bg-gray-800 sm:p-10 ">
      <div className="flex w-full max-w-xl flex-col gap-10 border p-10 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          Log in to your account
        </h2>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => handleFormSubmit(e, formData)}
        >
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="**********"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            className="rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600 focus:outline-none dark:focus:border-gray-200"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
}
