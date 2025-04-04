import { useState, useEffect } from 'react'
import Filter from './components/Filter.tsx'
import PersonForm, { Person } from './components/PersonForm.tsx'
import Persons from './components/Persons.tsx'
import personsService from './services/persons.tsx'
import Notification, { NotificationMessage } from './components/Notification.tsx'

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [filterName, setFilterName] = useState('')
  const [notification, setNotification] = useState<NotificationMessage>({ message: null, type: "error" })

  useEffect(() => {
    personsService.getAllPersons().then(initialPersons => {
      setPersons(initialPersons)
    }).catch(error => {
      console.error('Error fetching persons:', error)
      setNotification({ message: 'Error fetching persons', type: "error" })
      setTimeout(() => {
        setNotification({ message: null, type: "error" })
      }
      , 2000)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />

      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} setPersons={setPersons} setNotification={setNotification} />
    </div>
  )
}

export default App