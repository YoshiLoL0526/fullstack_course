import React, { useState } from "react";

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

        const pos = persons.findIndex(person => person.name === name)
        if (pos !== -1) {
            alert(`${name} is already added to phonebook`)
            return
        }

        const Person = { name: name, number: number, id: persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1 }
        const newPersons = persons.concat(Person)

        setPersons(newPersons)
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