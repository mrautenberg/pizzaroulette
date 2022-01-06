import { useState, useEffect } from "react";
import Pizza from "./components/Pizza";

function App() {
  const [showPizza, setShowPizza] = useState(false);

  // @TODO: filtrering av pizzerior
  // @TODO_HANS: update to an async function and use async await

  // @TODO: Decide if fetch all pizzas once when entering page or on state change
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [showPizza]);

  const buttonContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="App">
      <h1>Pizza Roulette</h1>

      {showPizza && <Pizza />}

      <div style={buttonContainer}>
        <button onClick={() => setShowPizza(!showPizza)}>Slumpa</button>
        <button onClick={() => console.log("full random")}>Full random</button>
        <button onClick={() => console.log("slumpa pizzeria")}>Tärning</button>
      </div>
    </div>

    /*
     *
     * Vid slumpa eller full random --> pizzaanimation
     * --> setShowPizza
     *
     * Spara pizzahistoria i LS/sessionStorage
     *
     */
  );
}

export default App;
