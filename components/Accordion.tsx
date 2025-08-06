"use client";

import Image from "next/image";
import plusIcon from "@/assets/images/icon-plus.svg";
import minusIcon from "@/assets/images/icon-minus.svg";
import { useState } from "react";

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

  function handleClick(question: string) {
    setExpanded((x) => (x === question ? undefined : question));
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {questionsAnswers.map(({ question, answer }) => {
        const isExpanded = question === expanded;
        const icon = isExpanded ? minusIcon : plusIcon;
        const answerStyle = isExpanded ? "" : "hidden";

        return (
          <section
            key={question}
            className="flex flex-col gap-300 pb-300 pt-300 border-b-[1px] last:border-b-0 border-purple-100"
          >
            <div className="flex">
              <h2 className="basis-full text-preset-2 text-purple-950">
                {question}
              </h2>
              <Image
                className="hover:cursor-pointer"
                src={icon}
                alt="Expand"
                width={24}
                height={24}
                priority
                onClick={() => handleClick(question)}
              />
            </div>

            <p className={`text-preset-3 text-purple-600 ${answerStyle}`}>
              {answer}
            </p>
          </section>
        );
      })}
    </div>
  );
}
