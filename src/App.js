import { useState } from "react";

const questions = [
  {
    title: "Who does FotoAlly targets",
    body: "The platform aims to create an open marketplace where clients ranging from wedding couples and families to graduates, corporations, and microbusinesses, can find and hire creative professionals for their photography and videography needs",
  },
  {
    title: "What are your revenue streams",
    body: "Subscription plans, Commission charged on each booking, Advertising space for creatives to promote their services",
  },
  {
    title: "What are the key features of FotoAlly",
    body: "User profiles, Search and filter, Portfolio showcase, Booking System, Payment  gateway, Review and Rating, Messaging system",
  },
  {
    title: "What is the mission of FotoAlly",
    body: "FotoAlly aims to revolutionize the photography and videography industry, making high-quality visual storytelling accessible to everyone",
  },
];

export default function App() {
  return (
    <div className="app">
      <Accordion data={questions} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <>
      <div className="header">Welcome the accordion building session</div>
      <div className="accordion">
        {data.map((item, i) => (
          <AccordionItem
            num={i}
            title={item.title}
            body={item.body}
            key={item.title}
          />
        ))}
      </div>
    </>
  );
}

function AccordionItem({ num, title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen} ? "open" : "" `} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <p className="content-box">{body}</p>}
    </div>
  );
}
