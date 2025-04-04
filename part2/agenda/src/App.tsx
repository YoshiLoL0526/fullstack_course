import { useState, useEffect } from 'react'
import Filter from './components/Filter.tsx'
import PersonForm, { Person } from './components/PersonForm.tsx'
import Persons from './components/Persons.tsx'
import personsService from './services/persons.tsx'

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personsService.getAllPersons().then(initialPersons => {
      setPersons(initialPersons)
    }).catch(error => alert(`Error getting persons: ${error}`))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} setPersons={setPersons} />
    </div>
  )
}

export default App