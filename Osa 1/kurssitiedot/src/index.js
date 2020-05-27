import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const Header = (props) =>{
    return (
      <div>
        <p>
          {props.course}
        </p>
      </div>
    )
  }
  
  const Content = (props)  =>{
    return (
      <div>
        <Part number='1' name='Fundamentals of React' amount='10' />
        <Part number='2' name='Using props to pass data' amount='7'/>
        <Part number='3' name='State of a component' amount='14'/>
      </div>
    )
  }
  
  const Part = (props)  =>{
    return (
      <p>
      Name of part{props.number} is {props.name} and there are {props.amount} exercises.
      </p>
    )
  }
  
  const Total = (props) =>{
    return (
      <div>
        <p>
         Number of exercises {exercises1 + exercises2 + exercises3}
        </p>
      </div>
    )
  }
  
  return (
    <div>
      <Header course='Half Stack application development'/>
      <Content/>
      <Total/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))