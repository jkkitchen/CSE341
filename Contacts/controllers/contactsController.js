const mongoContact = require('../models/contactsModel');

const getAllContacts = async (req, res) => {
    try {
        //Return all the documents in the contacts collection
        //Use .find to find matching documnents in the Mongo collection, to narrow it down you would enter a condition in the parentheses
        const contacts = await mongoContact.find();

        //200 means successful and data will be converted to JSON file
        res.status(200).json(contacts)
    } catch (err) {
        //500 means server error
        res.status(500).json({ message: err.message });
    }
};

const getSingleContact = async (req, res) => {
    try {
        //Return a single document from contacts where id matches the id from query parameter
        //Use findById function, it will pull the id from the route (params means values that are part of the URL path)
        const contact = await mongoContact.findById(req.params.id);        

        //200 means successful and data will be converted to JSON file
        res.status(200).json(contact)
            
    } catch (err) {
        //500 means server error
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllContacts,
    getSingleContact
}