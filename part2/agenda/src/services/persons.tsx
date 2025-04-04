import axios from 'axios'
import { Person } from '../components/PersonForm.tsx'

const baseUrl = "http://localhost:3001/persons"

const getAllPersons = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const createPerson = (person: Person) => {
    return axios.post(baseUrl, person).then(response => {
        return response.data
    })
}

const getPerson = (id: number) => {
    return axios.get(`${baseUrl}/${id}`).then(response => {
        return response.data
    })
}

const updatePerson = (id: number, person: Person) => {
    return axios.put(`${baseUrl}/${id}`, person).then(response => {
        return response.data
    })
}

const deletePerson = (id: number) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => {
        return response.data
    })
}

export default { getAllPersons, createPerson, getPerson, updatePerson, deletePerson }