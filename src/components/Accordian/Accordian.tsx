import { faqs } from "./faqs";
import AccordionItem from "./AccordianItem";
import { useState } from "react";
import Bar from "../Bar";

const Accordion = () => {
  const [clicked, setClicked] = useState(0);
  const handleToggle = (index:any) => {
    if (clicked === index) {
      setClicked(-1);  // Close the open item if it's clicked again
    } else {
      setClicked(index);  // Otherwise, open the clicked item
    }
  };
  

  return (
    <div className="flex md:flex-row gap-10 md:gap-20 justify-between flex-col mb-10 md:px-20 px-8">
    <div className="w-full max-w-[300px] flex flex-col md:items-center md:p-4">
      <p className="md:text-3xl text-lg text-yellow-600 font-play text-db">Frequently Asked Questions</p>
      <Bar w={"w-[132px] ml-0"} />
      <p className="md:text-lg text-db mt-2  md:mt-5 font-open">If you have any other questions, please feel free to contact us.</p>
    </div>

    <ul className="w-full max-w-[920px] bg-gray-50 rounded-2xl border border-white md:px-10 px-6 pb-2">
      {faqs.map((faq, index) => (
        <AccordionItem
          faq={faq}
          key={index}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          border={index !== faqs.length - 1}
        />
      ))}
    </ul>
    </div>
  );
};

export default Accordion;
