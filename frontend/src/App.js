import React from 'react'
import Pizza from './components/Pizza'

function App() {
  // @todo: Refactor state
  const [fullRandom, setFullRandom] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [randomPizza, setRandomPizza] = React.useState(null)
  const [randomPlace, setRandomPlace] = React.useState(null)

  const fetchRandom = React.useCallback(async () => {
    setIsLoading(true)
    setRandomPizza(false)
    setRandomPlace(false)

    // animation shows when loading

    try {
      const res = await fetch('db.json')
      const data = await res.json()
      setFullRandom(data)
      console.log(data)
    } catch (err) {
      console.error(err)
    }

    console.log('Fetch Random Place Ran')
    setIsLoading(false)
  }, [])

  const fetchRandomPizza = React.useCallback(async () => {
    setIsLoading(true)
    setFullRandom(false)
    setRandomPlace(false)

    // animation shows when loading

    try {
      const res = await fetch('db.json')
      const data = await res.json()
      setRandomPizza(data)
      console.log(data)
    } catch (err) {
      console.error(err)
    }

    console.log('Fetch Random Place Ran')
    setIsLoading(false)
  }, [])

  const fetchRandomPlace = React.useCallback(async () => {
    setIsLoading(true)
    setFullRandom(false)
    setRandomPizza(false)

    // animation shows when loading

    try {
      const res = await fetch('db.json')
      const data = await res.json()
      setRandomPlace(data)
      console.log(data)
    } catch (err) {
      console.error(err)
    }

    console.log('Fetch Random Place Ran')
    setIsLoading(false)
  }, [])

  const buttonContainer = {
    display: 'grid',
    gridTemplateColumns: '4fr 1fr',
    gridTemplateRows: 'auto',

    width: '60%',
    margin: '0 auto',
    maxWidth: '600px',
  }

  return (
    <div>
      <h1>Pizza Roulette</h1>

      {randomPizza && <Pizza />}
      {fullRandom && <p>full random</p>}
      {randomPlace && <p>random place</p>}
      {isLoading && <p>Loading...</p>}

      <div style={buttonContainer}>
        <button onClick={fetchRandomPizza}>Slumpa</button>
        <button onClick={fetchRandom}>Full random</button>

        <select name="" id="">
          <option value="lillaItalien">Lilla Italien</option>
          <option value="chrillesPizzeria">Chrilles Pizzeria</option>
          <option value="kaktusenPizzeria">Kaktusen Pizzeria</option>
          <option value="pizzeriaHornet">Pizzeria Hörnet</option>
        </select>

        <button onClick={fetchRandomPlace}>
          <img src="/images/taerning.png" width="60" height="60" alt="slumpa" />
        </button>
      </div>
    </div>
  )
}

export default App
