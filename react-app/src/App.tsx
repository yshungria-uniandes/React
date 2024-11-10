import ListGroup from "./components/ListGroup";
// import Message from "./Message";

function App() {
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      {/* <Message /> */}
    </div>
  );
}

export default App;
