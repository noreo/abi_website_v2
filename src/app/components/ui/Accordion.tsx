import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 px-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="leading-[34px] font-semibold pr-4 text-[20px] text-foreground">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 text-foreground leading-relaxed text-[16px]">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}