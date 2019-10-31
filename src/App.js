import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Wesley Walker"
        avatar="https://randomuser.me/api/portraits/men/78.jpg"
        online
      />
      <Contact
        name="Kelly Simmons"
        avatar="https://randomuser.me/api/portraits/men/15.jpg"
      />
      <Contact
        name="Taylor Daniels"
        avatar="https://randomuser.me/api/portraits/women/37.jpg"
        online
      />
    </div>
  );
}

export default App;
