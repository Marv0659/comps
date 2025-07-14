import Link from "../components/Link.js";

function Sidebar() {
  const links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
    {
      label: "Counter",
      path: "/counter",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link activeClassName="font-bold border-l-4 border-blue-500" className="mb-3" key={link.path} to={link.path}>
        {link.label}
      </Link>
    );
  });
  return <div className="sticky top-0 overflow-y-scroll flex flex-col gap-2 p-4 items-start">{renderedLinks}</div>;
}

export default Sidebar;
