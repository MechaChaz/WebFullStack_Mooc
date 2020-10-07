import React, { useState } from 'react'
import Numbers from './Components/Numbers'

const App = () => {
  const [ names, setNames] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: names.length + 1,
    }

    if(names.some( person => person.name === newName)) {
      window.alert(`${newName} already exists`)
      setNewName('')
    }
    else{
    setNames(names.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
        Filter Shown <input
        />
      <h2>Add a person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
           value={newName}
           onChange={handleNameChange}
           />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {names.map(item => <Numbers key={item.id} names={item.name} numbers={item.number} />)}
    </div>
  )

}

export default App