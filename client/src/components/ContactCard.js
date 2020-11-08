import React from 'react'
import { Link } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/actions/actions'
import 'react-confirm-alert/src/react-confirm-alert.css'

const ContactCard = ({ contact, getPerson }) => {

    const dispatch = useDispatch()
    const removeContact = () => {
        dispatch(deleteContact(contact._id))
    }
    const submit = () => {
        confirmAlert({
            title: 'Confirm to delete',
            message: `Are you sure to do delete ${contact.fullName} ?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => removeContact()
                },
                {
                    label: 'No',
                    onClick: () => onclose
                }
            ]
        })
    };



    return (
        <li className="list-group-item  d-flex justify-content-between my-2">
            <img src={process.env.PUBLIC_URL + 'avatar.png'} alt={contact.fullName} width="100x" height="100px" />
            <h6>{contact.fullName}</h6>
            <h6>{contact.email}</h6>
            <h6>{contact.phone}</h6>
            <div className="user-icon">
                <Link to="/edit-contact">
                    <span className="mx-2 text-success" onClick={() => getPerson(contact)}>
                        <i className="fas fa-pen"></i>
                    </span>
                </Link>
                <Link to="/contact-list">
                    <span className="mx-2 text-danger" onClick={submit} >
                        <i className="fas fa-trash" ></i>
                    </span>
                </Link>
            </div>
        </li>
    )
}

export default ContactCard
