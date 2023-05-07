import Badge from "@/components/Badge/Badge"; //require the Effsemble Badge component

export default function BadgeStyleOne() {
  return (
    <section className="flex flex-col gap-10 break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <div className="flex flex-row gap-5">
        <Badge color="red">
          <span>Warning</span>
        </Badge>
        <Badge color="yellow">
          <span>Caution</span>
        </Badge>
        <Badge color="green">
          <span>Success</span>
        </Badge>
        <Badge color="blue">
          <span>Info</span>
        </Badge>
        <Badge color="indigo">
          <span>Notice</span>
        </Badge>
        <Badge color="purple">
          <span>Alert</span>
        </Badge>
        <Badge color="pink">
          <span>Important</span>
        </Badge>
        <Badge color="gray">
          <span>Neutral</span>
        </Badge>
      </div>
    </section>
  );
}
