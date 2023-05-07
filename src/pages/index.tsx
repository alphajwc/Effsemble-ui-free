const { default: Head } = require("next/head");

export default function Home() {
  return (
    <div className="h-full w-full bg-white dark:bg-gray-800 dark:text-gray-300">
      <h1>Effsemble is running</h1>
    </div>
  );
}
