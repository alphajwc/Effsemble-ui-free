import Breadcrumbs from "@/components/Breadcumb/Breadcrumb"; //require Effsemble Components

export default function BreadcrumbStyleOne() {
  return (
    <section className="break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <Breadcrumbs className="items-center">
        <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item isActive={true} href="#">
          Nav Item 1
        </Breadcrumbs.Item>
        <Breadcrumbs.Item isEnd={true} href="#">
          Nav Item 2
        </Breadcrumbs.Item>
      </Breadcrumbs>
    </section>
  );
}
