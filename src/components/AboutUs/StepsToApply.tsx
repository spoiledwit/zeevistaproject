
import { FaPassport } from "react-icons/fa";
import {TfiWrite} from "react-icons/tfi";
import {AiOutlineFileDone} from "react-icons/ai";

type Step = {
  index: number;
  label: string;
  text: string;
  icon: JSX.Element;
};

const StepSection = ({ step }: { step: Step }) => {
  return (
    <div className="flex flex-col p-5 w-full h-full items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center bg-primary-blue rounded-full p-4 mb-4">
          {step.icon}
        </div>
        <h3 className="text-black text-center text-lg font-semibold mb-2 tracking-wide">
          {step.label}
        </h3>
        <p className="text-black text-center text-base lg:text-sm tracking-wide">
          {step.text}
        </p>
      </div>
    </div>
  );
};

const StepsToApply = () => {
  const steps: Step[] = [
    {
      index: 1,
      label: "Fill in the form",
      icon: <TfiWrite size={40} className="text-yellow-600" />,
      text: "CentenniaImmigration will fill up all your required forms when you apply for a visa.",
    },
    {
      index: 2,
      label: "Submit your attested documents",
      icon: <AiOutlineFileDone size={45} className="text-yellow-600"/>,
      text: "CentenniaImmigration will also submit all your attested documents that need to be submitted.",
    },
    {
      index: 3,
      label: "Receive your Visa",
      icon: <FaPassport size={40} className="text-yellow-600" />,
      text: "Don't worry about visa processing, just relax and wait to receive your desired visa.",
    },
  ];

  return (
    <div className="w-full py-12 md:py-40 px-8 md:px-20 flex flex-col items-center bg-white">
      <section className="w-full flex flex-col gap-3 text-center mb-10">
        <h3 className="text-yellow-600 font-serif text-lg md:text-4xl tracking-wide">
          STEP BY STEP PROCESS FOR YOUR VISA
        </h3>
        <p className="mb-4 tracking-wide text-black">
          We follow a streamlined and well-structured visa process for quick
          turnaround time for checking, follow up, and approval. With us, you can
          rest assured that you will only be provided with professional guidance.
        </p>
      </section>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        {steps.map((s) => (
          <StepSection key={s.index} step={s} />
        ))}
      </div>
    </div>
  );
};

export default StepsToApply;