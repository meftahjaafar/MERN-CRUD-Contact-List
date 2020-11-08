const express= require('express')
const router = express.Router()
const Contact= require('../models/Contact')


// @path: http://localhost:5000/contacts/addContact
// @used for: add new contact
// @type: public route
router.post('/addContact', (req,res)=>{
    const{fullName, email, phone} = req.body
    const newContact= Contact({
        fullName, email, phone
    })
    try {
        newContact.save()
        res.send(`new contact ${fullName} added sucessefully !`)
  
    } catch (error) {
        res.send(error)
    }

})

// @path: http://localhost:5000/contacts/getContacts
// @used for: show all contacts
// @type: public route
router.get('/getContacts', (req,res)=>{
    try {
        Contact.find()
        .then(contacts=>res.send(contacts))
        
    } catch (error) {
        res.send(error)
    }

})

// @path: http://localhost:5000/contacts/deleteContact/:_id
// @used for: delete contact by _id
// @type: public route
router.delete('/deleteContact/:_id', (req,res)=>{
    const {_id}=req.params
    try {
        Contact.findOneAndDelete({_id})
        .then(contact=>res.send(contact))
        
    } catch (error) {
        res.send(error)
    }

})

// @path: http://localhost:5000/contacts/getContact/:_id
// @used for: get contact by _id
// @type: public route
router.get('/getContact/:_id', (req,res)=>{
    const {_id}=req.params
    try {
        Contact.findOne({_id})
        .then(contact=>res.send(contact))
        
    } catch (error) {
        res.send(error)
    }
})

// @path: http://localhost:5000/contacts/updateContact/:_id
// @used for: update contact by _id
// @type: public route
router.put('/updateContact/:_id', (req,res)=>{
    const {_id}=req.params
    const {fullName, email, phone}=req.body
    try {
        Contact.findOneAndUpdate({_id}, {$set:{fullName, email, phone}})
        .then(contact=>res.send(contact))
        
    } catch (error) {
        res.send(error)
    }
})

module.exports=router