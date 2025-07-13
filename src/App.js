import Link from "./components/Link.js";
import Route from "./components/Route.js";
import AccordionPage from "./pages/AccordionPage.js";
import DropDownPage from "./pages/DropDownPage.js";

function App() {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <Link to="/accordion">Go to Accordion</Link>
        <Link to="/dropdown">Go to Dropdown</Link>
      </div>
      <div className="p-4">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/">
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to Components Demo</h1>
            <p>Click on the links above to view different components.</p>
          </div>
        </Route>
      </div>
    </div>
  );
}

export default App;
