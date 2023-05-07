import Modal from "@/components/Modal/Modal"; //require Effsemble Modal component
import { useState } from "react";

export default function ModalStyleOne() {
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <section className="break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Simple Modal</Modal.Header>
        <Modal.Body>
          <p>This is an example modal body.</p>
        </Modal.Body>
      </Modal>
    </section>
  );
}
