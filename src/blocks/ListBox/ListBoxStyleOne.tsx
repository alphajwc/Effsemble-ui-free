import ListBox from "@/components/ListBox/ListBox"; //require Effsemble ListBox Component

export default function ListBoxStyleOne() {
  const handleSelect = (option: string) => {
    alert(option);
  };
  return (
    <section className="break-words bg-white dark:bg-gray-800 max-sm:p-5 sm:p-10">
      <ListBox onSelect={handleSelect}>
        <ListBox.Button>Option 1</ListBox.Button>
        <ListBox.OptionContainer>
          <ListBox.Option value="Option 1">Option 1</ListBox.Option>
          <ListBox.Option value="Option 2">Option 2</ListBox.Option>
          <ListBox.Option value="Option 3">Option 3</ListBox.Option>
        </ListBox.OptionContainer>
      </ListBox>
    </section>
  );
}
