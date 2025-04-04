import React, { useState } from "react";
import personService from '../services/persons.tsx'

export interface Person {
    name: string;
    number: string;
    id: number;
}

interface PersonFormProps {
    persons: Person[];
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
}

const PersonForm: React.FC<PersonFormProps> = ({ persons, setPersons }) => {
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
                })
            }
        }
        else {
            const Person = { name: name, number: number, id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1 }

            personService.createPerson(Person).then(newPerson => {
                setPersons(persons.concat(newPerson))
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