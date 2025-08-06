import Accordion from "@/components/Accordion";
import Logo from "@/components/Logo";

export default function DefaultPage() {
  return (
    <main>
      <div className="bg-white w-[600px] p-500 rounded-[16px]">
        <Logo>FAQs</Logo>
        <Accordion
          questionsAnswers={[
            {
              question: "What is Frontend Mentor, and how will it help me?",
              answer:
                "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
            },
            {
              question: "Is Frontend Mentor free?",
              answer:
                "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
            },
            {
              question: "Can I use Frontend Mentor projects in my portfolio?",
              answer:
                "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
            },
            {
              question: "How can I get help if I'm stuck on a challenge?",
              answer:
                "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
            },
          ]}
        />
      </div>
    </main>
  );
}
