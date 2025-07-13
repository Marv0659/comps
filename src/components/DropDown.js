import { useState, useRef, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionsClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rouned cursor-pointer p-1" onClick={() => handleOptionsClick(option)} key={option.valie}>
        {option.label}
        <span className="text-gray-500 ml-2">{option.value}</span>
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
    </div>
  );
}

export default DropDown;
