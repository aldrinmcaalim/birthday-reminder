import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import peopleData from "./data";

import List from "./components/list/List";

function App() {
  const [people, setPeople] = useState(peopleData);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
