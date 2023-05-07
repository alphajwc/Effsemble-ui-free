import Alert from "@/components/Alert/Alert"; //require Effsemble Alert component

export default function AlertStyleOne() {
  return (
    <section className="flex flex-col gap-10 break-words bg-white p-5 dark:bg-gray-800 sm:p-10">
      <Alert type="info">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A system update is now available. This update includes important
          security fixes and performance improvements. It is recommended that
          you save any unsaved work and close any open applications before
          proceeding with the update. The update may take several minutes to
          complete. Thank you for keeping your system up-to-date!
        </p>
      </Alert>
    </section>
  );
}
