import Toggle from "@/components/Toggle/Toggle"; //require Effsemble Components

export default function ToggleStyleOne() {
  const handleToggleChange = (checked: boolean) => {
    console.log("Toggle is now:", checked ? "ON" : "OFF");
  };
  return (
    <section className="flex flex-col items-center justify-center gap-10 break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <Toggle
        defaultChecked={true}
        onChange={handleToggleChange}
        toggleStyle="bg-red-600"
      ></Toggle>
      <Toggle
        defaultChecked={true}
        onChange={handleToggleChange}
        toggleStyle="bg-blue-600"
      ></Toggle>
      <Toggle
        defaultChecked={true}
        onChange={handleToggleChange}
        toggleStyle="bg-green-600"
      ></Toggle>
      <Toggle
        defaultChecked={true}
        onChange={handleToggleChange}
        toggleStyle="bg-orange-600"
      ></Toggle>
      <Toggle
        defaultChecked={true}
        onChange={handleToggleChange}
        toggleStyle="bg-yellow-600"
      ></Toggle>
    </section>
  );
}
