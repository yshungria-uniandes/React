import ListGroup from "./components/ListGroup";
// import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

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

  const handleSelectedItem = (item: string) => {
    console.log("Selected item", item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello, Welcome to the <span>United States</span>
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
        color="success"
      >
        My button
      </Button>
      {/* <Message /> */}
    </div>
  );
}

export default App;
