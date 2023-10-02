import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

interface AccordionItemProps {
  faq: {
    question: string;
    answer: string;
  };
  onToggle: () => void;
  active: boolean;
  border?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, onToggle, active, border }) => {
  
  return (
    <>
    <div
      onClick={onToggle}
      className={`tracking-wide  ${active ? "border-b border-b-gray-200" : border ? "border-b border-b-gray-200" : "" } md:text-2xl font-play py-3 md:py-5 flex md:items-center justify-between w-full cursor-pointer`}
    >
      {faq.question}
      <motion.div animate={{ rotate: active ? 0 : 180 }} className="h-4">
        <IoIosArrowUp size={16} className="text-db" />
      </motion.div>
    </div>
    <AnimatePresence initial={false}>
      {active && (
        <motion.section
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <motion.div
            variants={{ collapsed: { y: 32 }, open: { y: 0 } }}
            transition={{ duration: 0.2 }}
            className="w-full text-justify px-4 py-5 text-sm md:text-md font-open"
          >
            {faq.answer}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  </>
  );
};

export default AccordionItem;
