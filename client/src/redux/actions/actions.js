import axios from 'axios'
import { GET_CONTACTS } from './actionTypes'

// get all contacts
export const getContacts = () => dispatch => {
    axios.get('/contacts/getContacts')
        .then(res => dispatch({ type: GET_CONTACTS, payload: res.data }))
        .catch(err => console.log(err));
}

//add new contact
export const addContact = (newContact) => dispatch => {
    axios.post('/contacts/addContact', newContact)
        .then(res => dispatch(getContacts()))
        .catch(err => console.log(err))
}

//delete contact by ID
export const deleteContact = (idContact) => dispatch => {
    axios.delete(`/contacts/deleteContact/${idContact}`)
        .then(res => dispatch(getContacts()))
        .catch(err => console.log(err))
}

//Edit contact by ID
export const editContact = (idContact, updatedContact) => dispatch => {
    axios.put(`/contacts/updateContact/${idContact}`, updatedContact)
        .then(res => dispatch(getContacts()))
        .catch(err => console.log(err))
}