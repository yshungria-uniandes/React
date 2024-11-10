import { MouseEvent } from "react";

function ListGroup() {
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
  // items = [];

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List Group</h1>
  //       <p>No items found</p>;
  //     </>
  //   );
  // }
  const message = items.length === 0 && <p>No items found</p>;

  // Event handler
  const handleClick = () => (event: MouseEvent) => {
    console.log("Clicked", event);
  };

  return (
    <>
      <h1>List Group</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item" onClick={handleClick()}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
