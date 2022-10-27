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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button click={() => setGood(good + 1)} name="good"/>      
      <Button click={() => setNeutral(neutral + 1)} name="neutral"/>
      <Button click={() => setBad(bad + 1)} name="bad"/>
      
      <h1>statistics</h1>
      <Display name={"good "+good}/>
      <Display name={"neutral "+neutral}/>
      <Display name={"bad "+bad}/>
    </div>
  )
}

export default App