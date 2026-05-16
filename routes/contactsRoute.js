const express = require("express");
const contactsRouter = new express.Router();
const {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
} = require('../controllers/contactsController');

//GET route for all contacts
contactsRouter.get('/', getAllContacts);

//GET route for single contact
contactsRouter.get('/:id', getSingleContact);

//POST route to create new contact
contactsRouter.post('/', createContact);

//PUT route to update a contact
contactsRouter.put('/:id',
    /* To ensure that the PUT route in api-docs has a body space for updates
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Updated contact information',
            required: true,
            schema: {
                firstName: 'Jessica',
                lastName: 'Kitchen',
                email: 'jessica@test.com',
                favoriteColor: 'Purple',
                birthday: '1995-01-01'
            }
        }
    */
    updateContact);

//DELETE route to delete a contact
contactsRouter.delete('/:id', deleteContact);

module.exports = contactsRouter;