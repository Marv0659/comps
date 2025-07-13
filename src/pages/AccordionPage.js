import Accordion from "../components/Accordion.js";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Can I use React on a project?",
      content: "Yes, you can use React on any project you want. It is a JavaScript library for building user interfaces.",
    },
    {
      id: "2",
      label: "Can i use JavaScript on a project?",
      content: "Yes, you can use JavaScript on any project you want. It is a programming language that is widely used for web development.",
    },
    {
      id: "3",
      label: "Can I use CSS on a project?",
      content: "Yes, you can use CSS on any project you want. It is a style sheet language used for describing the presentation of a document written in HTML or XML.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
