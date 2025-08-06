"use client";

import Image from "next/image";
import plusIcon from "@/assets/images/icon-plus.svg";
import minusIcon from "@/assets/images/icon-minus.svg";
import { KeyboardEvent, useState } from "react";

type QuestionAnswer = {
  question: string;
  answer: string;
};

interface AccordionProps {
  questionsAnswers: QuestionAnswer[];
  className?: string;
}

export default function Accordion({
  questionsAnswers,
  className,
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string | undefined>(undefined);

  function toggleAccordion(question: string) {
    setExpanded((x) => (x === question ? undefined : question));
  }

  function handleKeyDown(e: KeyboardEvent, question: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(question);
    }
  }

  return (
    <div className={`flex flex-col ${className}`} role="presentation">
      {questionsAnswers.map(({ question, answer }, i) => {
        const isExpanded = question === expanded;
        const icon = isExpanded ? minusIcon : plusIcon;
        const answerId = `answer-${i}`;
        const answerStyle = isExpanded ? "" : "hidden";

        return (
          <section
            key={i}
            className="flex flex-col gap-300 pb-300 pt-300 border-b-[1px] last:border-b-0 border-purple-100"
          >
            <div className="flex" role="heading" aria-level={3}>
              <button
                className="flex w-full justify-between items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
                onClick={() => toggleAccordion(question)}
                onKeyDown={(e) => handleKeyDown(e, question)}
                aria-expanded={isExpanded}
                aria-controls={answerId}
              >
                <h2 className="basis-full text-preset-2 text-purple-950 hover:text-purple-500 transition-colors">
                  {question}
                </h2>
                <Image
                  src={icon}
                  alt={isExpanded ? "Collapse" : "Expand"}
                  width={24}
                  height={24}
                  priority
                />
              </button>
            </div>

            <p
              id={answerId}
              className={`text-preset-3 text-purple-600 ${answerStyle}`}
              aria-hidden={!isExpanded}
            >
              {answer}
            </p>
          </section>
        );
      })}
    </div>
  );
}
