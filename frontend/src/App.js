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

  // Show pizza on setShowPizza --> toggle to the view when we see a pizza

  // Random pizza but pizzeria already selected
  const randomPizza = () => {
    // useFetch to fetch from API

    console.log("random pizza");
    if (!showPizza) {
      console.log("hurru");
      setShowPizza(true);
    }
  };

  // Full random, pizza & pizzeria randomized
  const fullRandom = () => {
    // useFetch to fetch from API

    console.log("full random");
    if (!showPizza) {
      setShowPizza(true);
    }
  };

  const buttonContainer = {
    display: "grid",
    gridTemplateColumns: "4fr 1fr",
    gridTemplateRows: "auto",

    width: "60%",
    margin: "0 auto",
    maxWidth: "600px",
  };

  return (
    <div>
      <h1>Pizza Roulette</h1>

      {showPizza && <Pizza />}

      <div style={buttonContainer}>
        <button onClick={() => randomPizza()}>Slumpa</button>
        <button onClick={() => fullRandom()}>Full random</button>
        {/* select should store the value for selected pizzeria
            i.e. setPizzeria("lillItalien") if lillaItalien is selected 
        */}
        <select name="" id="">
          <option value="lillaItalien">Lilla Italien</option>
          <option value="chrillesPizzeria">Chrilles Pizzeria</option>
          <option value="kaktusenPizzeria">Kaktusen Pizzeria</option>
          <option value="pizzeriaHornet">Pizzeria Hörnet</option>
        </select>
        <button onClick={() => console.log("slumpa pizzeria")}>
          <img src="/images/taerning.png" width="60" height="60" alt="slumpa" />
        </button>
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
