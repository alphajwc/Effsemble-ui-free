import { TabButton } from "@/components/Tab/TabButton"; // require Effsemble Tab component
import { TabContent } from "@/components/Tab/TabContent"; // require Effsemble Tab component
import TabGroup from "@/components/Tab/TabGroup"; // require Effsemble Tab component
export default function TabStyleOne() {
  return (
    <section className="p-5">
      <TabGroup className="w-fit" defaultTab="tab-1">
        <div className="flex flex-row max-md:flex-col">
          <TabButton
            id="tab-1"
            className="border-x border-t p-5 "
            activeClassName="border-b border-b-gray-900 font-bold dark:bg-gray-700"
          >
            Overview
          </TabButton>
          <TabButton
            id="tab-2"
            className="border-r border-t p-5 max-md:border-x"
            activeClassName="border-b border-b-gray-900 font-bold dark:bg-gray-700"
          >
            Features
          </TabButton>
          <TabButton
            id="tab-3"
            className="border-r border-t p-5 max-md:border-x"
            activeClassName="border-b border-b-gray-900 font-bold dark:bg-gray-700"
          >
            FAQs
          </TabButton>
        </div>

        <TabContent id="tab-1" className="border p-5">
          <p>
            Display a brief summary of the application, including its purpose,
            main features, and any relevant background information. This section
            provides users with a general understanding of the app and its
            functionality.
          </p>
        </TabContent>
        <TabContent id="tab-2" className="border p-5">
          <p>
            List and describe the key features of the application, such as
            collaboration tools, data visualization, or user management. This
            section highlights the main components that set the application
            apart and make it unique.
          </p>
        </TabContent>
        <TabContent id="tab-3" className="border p-5">
          <p>
            Provide answers to frequently asked questions about the application,
            addressing topics such as technical requirements, pricing, and
            support. This section serves as a resource for users to quickly find
            answers to common questions.
          </p>
        </TabContent>
      </TabGroup>
    </section>
  );
}
