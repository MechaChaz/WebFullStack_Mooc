import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const StatisticLine = (props)=> {
  return (
    <div>
      {props.name} {props.value}
    </div>
  )
}

const Button = (props) => {
  return (
   <button onClick={props.value}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }

  return (
    <div>
    <StatisticLine name='Good' value={props.values.good}/>
    <StatisticLine name='Neutral' value={props.values.neutral}/>
    <StatisticLine name='Bad' value={props.values.bad}/>
    <StatisticLine name='All' value={props.total}/>
    <StatisticLine name='Average' value={(props.values.good + (props.values.neutral * 0) + (-props.values.bad)) / props.total}/>
    <StatisticLine name='Positive %' value={props.values.good / props.total}/>
    </div>
  )

}

const App = (props) => {

  const [total, setTotal] = useState(0)
  const [values, setValues] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGood = () => {
    setValues({ ...values, good: values.good + 1})
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setValues({ ...values, neutral: values.neutral + 1})
    setTotal(total + 1)
  }
    
  const handleBad = () => {
    setValues({ ...values, bad: values.bad + 1})
    setTotal(total + 1)
  }

  return (
    <div>
      <Header name='Give Feedback' />
      <Button value={handleGood} text='Good'/>
      <Button value={handleNeutral} text='Neutral'/>
      <Button value={handleBad} text='Bad'/>
      <Header name='Statistics' />
      <Statistics values={values} total={total}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)