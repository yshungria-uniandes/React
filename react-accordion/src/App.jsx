import faqs from "./services/fakeFaqsService";
import Accordion from "./components/Accordion";
import "./components/styles.css";


export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
