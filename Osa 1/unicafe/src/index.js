import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) =>{
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Value = (props)=>{
  return(
    <div>
      {props.value}
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

  const handleNeutral = () =>{
    setValues({ ...values, neutral: values.neutral + 1})
    setTotal(total + 1)
  }
    
  const handleBad = () =>{
    setValues({ ...values, bad: values.bad + 1})
    setTotal(total + 1)
  }

  return (
    <div>
      <Header name='Give Feedback' />
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Header name='Statistics' />
      <Value value={values.good}/>
      <Value value={values.neutral}/>
      <Value value={values.bad}/>
      <Value value={total}/>
      <Value value={(values.good + (values.neutral * 0) + (-values.bad)) / total}/>
      <Value value={values.good / total}/>
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)