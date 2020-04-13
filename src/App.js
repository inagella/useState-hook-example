import React from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = React.useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlfor="name">Name:</label>
        <input id="name" onChange={handleChange} />
      </form>
      {name ? <strong>Hello {name}!!</strong> : "Please Type your Name."}
    </div>
  );
}
