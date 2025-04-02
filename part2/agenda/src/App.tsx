import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.tsx'
import PersonForm, { Person } from './components/PersonForm.tsx'
import Persons from './components/Persons.tsx'

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data)
      }
      )
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} />
    </div>
  )
}

export default App