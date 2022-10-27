import { useState } from 'react'

const Button = (prop) => {
  return (
    <button onClick={prop.click}>{prop.name}</button>
  )
  
}

const Display = (prop) => {
  return (
    <div>{prop.name}</div>
  )
}

const Statistics = ({statistics}) => {
  if (statistics.all > 0) {
    return(<div>
      <h1>statistics</h1>
      <p>{"good "+statistics.good}</p>
      <p>{"neutral "+statistics.neutral}</p>
      <p>{"bad "+statistics.bad}</p>
      <p>{"all "+statistics.all}</p>
      <p>{"average "+statistics.average}</p>
      <p>{"positive "+statistics.positive}</p>
    </div>
    )
  }
  return(
    <p>No feedback given</p>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    total: 0,
    average: 0,
    positive: 0,
  })

  const addToGood = () =>{
    const newStatistics = {
      ...statistics,
      good: statistics.good + 1,
      all: statistics.all + 1,
      total: statistics.total +1,
      average: (statistics.total+1)/(statistics.all+1),
      positive: (statistics.good+1)/(statistics.all+1)
    }
    setStatistics(newStatistics)
  }

  const addToNeutral = () =>{
    const newStatistics = {
      ...statistics,
      neutral: statistics.neutral + 1,
      all: statistics.all + 1,
      average: (statistics.total)/(statistics.all+1),
      positive: statistics.good/(statistics.all+1)
    }
    setStatistics(newStatistics)
  }

  const addToBad = () =>{
    const newStatistics = {
      ...statistics,
      bad: statistics.bad + 1,
      all: statistics.all + 1,
      total: statistics.total - 1,
      average: (statistics.total - 1)/(statistics.all+1),
      positive: statistics.good/(statistics.all+1)
    }
    setStatistics(newStatistics)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button click={addToGood} name="good"/>      
      <Button click={addToNeutral} name="neutral"/>
      <Button click={addToBad} name="bad"/>
      
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App