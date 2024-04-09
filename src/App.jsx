
import './App.css'
import { useState } from 'react';
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([

    { header: "hej hej", body: "ok" },
    { header: "hej hej", body: "ok" },
    { header: "hej hej", body: "ok" },
    { header: "hej hej", body: "ok" },
    { header: "hej hej", body: "ok" },
    { header: "hej hej", body: "ok" },
  ]);



  function updateCount() {
    console.log("ok");
    setCount(count + 1);
  }

  function addCard() {
    setData([...data, { header: "hell yeah", body: "woop wopp" }]);
  }

  return (
    <>
      <main className={count % 2 === 0 ? "even" : "odd"}>
        <h1>hej, her er dine {data.length} artikler</h1>
        <button onClick={updateCount}>klik her</button>
        <button onClick={addCard}>tilføj mere data</button>
        {data.map((card) =>
        (<Card header={card.header} body={card.body} />
        ))}
      </main>
    </>
  );
}
export default App
