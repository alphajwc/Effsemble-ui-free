import Notification from "@/components/Notification/Notification";
import { useState } from "react";

export default function NotificationStyleOne() {
  const [visible, setVisible] = useState(false);
  return (
    <section className="flex flex-col gap-10 break-words  dark:bg-gray-800 max-sm:p-5 sm:p-10">
      <div className="p-4">
        {visible && (
          <Notification type="success" onClose={() => setVisible(false)}>
            Add to cart successfully
          </Notification>
        )}
        <button
          className="rounded bg-green-500 px-4 py-2 text-white"
          onClick={() => setVisible(true)}
        >
          Show Notification
        </button>
      </div>
    </section>
  );
}
