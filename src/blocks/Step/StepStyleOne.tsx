import { Step } from "@/components/Step/Step"; //require Effsemble Step Component
import { Steps } from "@/components/Step/Steps"; //require Effsemble Step Component

export default function StepStyleOne() {
  return (
    <section className="flex flex-col gap-10 bg-white p-5 dark:bg-gray-800 sm:p-10">
      <div className="App">
        <Steps>
          <Step stepType="completed">Step 1</Step>
          <Step stepType="active">Step 2</Step>
          <Step>Step 3</Step>
          <Step>Step 4</Step>
          <Step>Step 5</Step>
        </Steps>
      </div>
    </section>
  );
}
