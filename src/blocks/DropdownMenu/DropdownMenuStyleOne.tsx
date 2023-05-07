import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";

const dropdownMenuData = [
  {
    title: "Dropdown Menu 1",
    onClick: () => alert("Item clicked"),
  },
  {
    title: "Dropdown Menu 2",
    onClick: () => alert("Item clicked"),
  },
  {
    title: "Dropdown Menu 3",
    onClick: () => alert("Item clicked"),
  },
];

export default function DropdownMenuStyleOne() {
  return (
    <section className="flex flex-col gap-10 break-words dark:bg-gray-800 max-sm:p-5 sm:p-10">
      <DropdownMenu>
        <DropdownMenu.Button>Dropdown Menu</DropdownMenu.Button>
        <DropdownMenu.ItemsContainer>
          {dropdownMenuData.map((item, index) => (
            <DropdownMenu.Item key={index} onClick={item.onClick}>
              {item.title}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.ItemsContainer>
      </DropdownMenu>
    </section>
  );
}
