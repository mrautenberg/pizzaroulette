import { useState, useEffect } from "react";

function App() {
  const [showPizza, setShowPizza] = useState(false);

  // @TODO: filtrering av pizzerior
  // @TODO_HANS: update to an async function and use async await
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [showPizza]);

  return (
    <div className="App">
      <p>Hej poika</p>
      <button onClick={() => setShowPizza(!showPizza)}>
        Show pizza toggle
      </button>
    </div>

    /**
     * Vid slumpa eller full random --> pizzaanimation
     * --> setShowPizza
     *
     * Spara pizzahistoria i LS/sessionStorage
     *
     */
  );
}

export default App;
