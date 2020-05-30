import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) =>{
    return (
      <div>
        <p>
          <h1>{props.course.name}</h1>
        </p>
      </div>
    )
  }
  
  const Content = (props)  =>{
    return (
      <div>
        <Part number='1' name={props.course.parts[0].name} amount={props.course.parts[0].exercises} />
        <Part number='2' name={props.course.parts[1].name} amount={props.course.parts[1].exercises}/>
        <Part number='3' name={props.course.parts[2].name} amount={props.course.parts[2].exercises}/>
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
         Number of exercises {props.course.parts[0].exercises +  props.course.parts[1].exercises + props.course.parts[2].exercises}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}  />
      <Content course={course}  />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))