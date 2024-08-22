import { useState } from "react"

const Heading = () => {
  return <h1>Give Feedback</h1>
}

const Buttons = ({ setGood, setNeutral, setBad, good, neutral, bad }) => {
  return (
    <div>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
    </div>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
} 

const Stats = ({ good, neutral, bad }) => {
  if ((good+neutral+bad)==0){
    return(
      <div>
        <h1>Statistics</h1>
        No feedback given.
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>  
          <StatisticsLine text={"Good"} value={good}></StatisticsLine>
          <StatisticsLine text={"Neutral"} value={neutral}></StatisticsLine>
          <StatisticsLine text={"Bad"} value={bad}></StatisticsLine>
          <StatisticsLine text={"Average"} value={(good-bad)/(good+neutral+bad)}></StatisticsLine>
          <StatisticsLine text={"Positive"} value={(good)/(good+neutral+bad)*100}></StatisticsLine>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading />
      <Buttons
        setGood={setGood}
        setNeutral={setNeutral}
        setBad={setBad}
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
