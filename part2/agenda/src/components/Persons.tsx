import React from 'react';
import { Person } from './PersonForm.tsx';

export interface PersonsProps {
    persons: Person[]
    filterName: string
}

const Persons: React.FC<PersonsProps> = ({ persons, filterName }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    );
}

export default Persons;