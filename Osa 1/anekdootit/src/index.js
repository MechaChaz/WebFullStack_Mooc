import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.event}>{props.name}</button>
  )
}

const MostVoted = (props) => {
  if(props.votes > 0){
    return(
      <div>
        <h1>Most voted quote is</h1>
        {props.quote}
        <div>It has {props.votes} votes</div>
      </div>
    )
  }
  return(
    <div>
      <h1>Most voted quote is</h1>
      No anecdote has been voted.
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [controller, setController] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

 const handleClick = () => {
    setController ((Math.floor(Math.random() * anecdotes.length)))
    setSelected (controller)
  }

  const addVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const indexOfMax = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      {props.anecdotes[selected]}
      <div>
      {votes[selected]}
      </div>
      <div> 
      <Button event={handleClick} name='New Quote'/>
      <Button event={addVote} name='Vote Quote'/>
      </div>
      <MostVoted votes = {votes[indexOfMax()]} quote = {anecdotes[indexOfMax()]}
      />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)