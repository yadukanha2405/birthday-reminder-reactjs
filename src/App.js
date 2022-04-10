import "./styles.css";
import data from "./data";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [birthdayData, setBirthdayData] = useState(data);
  return (
    <main>
      <section className="container">
        <h4>{birthdayData.length} Birthday today</h4>
        <List people={birthdayData} />
        <button onClick={() => setBirthdayData([])}>Clear All</button>
      </section>
    </main>
  );
}
