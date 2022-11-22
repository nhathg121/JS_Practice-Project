import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Greeting() {
  return (
    <h4 className="card">
      <Person />
      This is Japan and this uis myy first component
    </h4>
  );
}

const Person = () => (
  <h2 style={{ color: "red", backgroundColor: "blue" }}>Japann</h2>
);

ReactDOM.render(<Greeting />, document.getElementById("root"));
