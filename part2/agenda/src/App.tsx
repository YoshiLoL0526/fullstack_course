import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()

    const pos = persons.findIndex(person => person.name === newName)
    if (pos !== -1) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const temp = persons.concat({ name: newName })
    setPersons(temp)
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App