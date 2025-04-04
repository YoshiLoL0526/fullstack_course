import React, { useState } from "react";
import personService from '../services/persons.tsx'
import { NotificationMessage } from './Notification.tsx'

export interface Person {
    name: string;
    number: string;
    id: number;
}

interface PersonFormProps {
    persons: Person[];
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
    setNotification: React.Dispatch<React.SetStateAction<NotificationMessage>>;
}

const PersonForm: React.FC<PersonFormProps> = ({ persons, setPersons, setNotification }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const person = persons.find(person => person.name === name)
        if (person) {
            const confirmPut = window.confirm(`${person.name} is already added to notebook, repalce the old number with a new one?`);
            if (confirmPut) {
                personService.updatePerson(person.id, { ...person, number }).then(updatedPerson => {
                    setPersons(persons.map(xPerson => xPerson.id !== person.id ? xPerson : updatedPerson))
                    setNotification({ message: `Updated ${updatedPerson.name}`, type: "success" })
                    setTimeout(() => {
                        setNotification({ message: null, type: "error" })
                    }, 2000)
                }).catch(() => {
                    setNotification({ message: `Information of ${person.name} has already been removed from server`, type: "error" })
                    setTimeout(() => {
                        setNotification({ message: null, type: "error" })
                    }, 2000)
                })
            }
        }
        else {
            const Person = { name: name, number: number, id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1 }

            personService.createPerson(Person).then(newPerson => {
                setPersons(persons.concat(newPerson))
                setNotification({ message: `Added ${newPerson.name}`, type: "success" })
                setTimeout(() => {
                    setNotification({ message: null, type: "error" })
                }, 2000)
            }).catch(() => {
                setNotification({ message: `Can't create ${Person.name}.`, type: "error" })
                setTimeout(() => {
                    setNotification({ message: null, type: "error" })
                }, 2000)
            })
        }

        setName('')
        setNumber('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
            />
            <input
                type="tel"
                value={number}
                onChange={handleNumberChange}
                placeholder="Number"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default PersonForm;