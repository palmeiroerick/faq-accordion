import Image from "next/image";
import { useState } from "react";
import Answer from "./Answer";
import Divisor from "./Divisor";

type FAQsType = {
  id: number;
  question: string;
  answer: string;
};

export default function FAQs() {
  const FAQs: FAQsType[] = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      answer: `
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      `,
    },
    {
      id: 2,
      question: "Is Frontend Mentor free?",
      answer: `
        Yes, Frontend Mentor offers both free and premium coding challenges,
        with the free option providing access to a range of projects suitable
        for all skill levels.
      `,
    },
    {
      id: 3,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: `
        Yes, you can use projects completed on Frontend Mentor in your
        portfolio. It's an excellent way to showcase your skills to
        potential employers!
      `,
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a challenge?",
      answer: `
        The best place to get help is inside Frontend Mentor's Discord
        community. There's a help channel where you can ask questions and
        seek support from other community members.
      `,
    },
  ];

  const [activeButton, setActiveButton] = useState<number | null>(1);

  return (
    <div className="flex flex-col gap-6">
      {FAQs.map(({ id, question, answer }, index) => {
        return (
          <div key={id} className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-6 lg:gap-8">
              <button
                onClick={() => {
                  if (activeButton !== id) {
                    setActiveButton(id);
                  } else {
                    setActiveButton(null);
                  }
                }}
                className="flex cursor-pointer flex-col gap-6 outline-none"
              >
                <div className="flex w-full items-center justify-between gap-6 lg:gap-8">
                  <h2 className="text-start text-base font-semibold text-darkPurple hover:text-grayishPurple lg:text-[17px]">
                    {question}
                  </h2>
                  <Image
                    src={
                      activeButton === id ? "/icon-minus.svg" : "/icon-plus.svg"
                    }
                    alt="expand"
                    width={30}
                    height={31}
                  />
                </div>
                {activeButton === id && <Answer>{answer}</Answer>}
              </button>
              {index !== FAQs.length - 1 && <Divisor />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
