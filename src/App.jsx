import { useState } from "react"
import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"

function App() {
  const getRandom = (array) =>{
    const randomIndex=Math.floor(array.length*Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote]= useState(getRandom(quoteDB))
  const [color,setColor]=useState(getRandom(colors))

  const getNewValues=() =>{
    const newQuote=getRandom(quoteDB)
    const newColors=getRandom(colors)

    setQuote(newQuote)
    setColor(newColors)
  }

  const backgroundObjet={
    backgroundColor:color
  }
  const colorObject = {
    color:color
  }

  return (
    <div className="App" style={backgroundObjet}>
      <QuoteBox
      quote={quote}
      getNewValues={getNewValues}
      backgroundObjet={backgroundObjet}
      colorObject={colorObject}
      />
    </div>
  )
}

export default App
