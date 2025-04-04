import React from 'react';
import { Person } from './PersonForm.tsx';
import personsService from '../services/persons.tsx'

export interface PersonsProps {
    persons: Person[]
    filterName: string
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>
}

const Persons: React.FC<PersonsProps> = ({ persons, filterName, setPersons }) => {

    const handleDelete = (id: number) => {
        const personToDelete = persons.find(person => person.id === id);
        if (!personToDelete) return;

        const confirmDelete = window.confirm(`Are you sure you want to delete ${personToDelete.name}?`);
        if (confirmDelete) {
            personsService.deletePerson(id).then(() => {
                setPersons(persons.filter((person: Person) => person.id !== personToDelete.id));
            }).catch(error => alert(`Error deleting person: ${error}`));
        }
    }

    return (
        <div>
            {persons
                .filter((person: Person) => person.name.toLowerCase().includes(filterName.toLowerCase()))
                .map((person: Person) => (
                    <p key={person.id}>
                        {person.name} {person.number}
                        <button onClick={() => handleDelete(person.id)}>Delete</button>
                    </p>
                ))}
        </div>
    );
};

export default Persons;