const Contact = require('../models/contactsModel');

const getAllContacts = async (req, res) => {
    try {
        //Return all the documents in the contacts collection
        //Use .find to find matching documnents in the Mongo collection, to narrow it down you would enter a condition in the parentheses
        const contacts = await Contact.find();

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
        const contact = await Contact.findById(req.params.id);

        //200 means successful and data will be converted to JSON file
        res.status(200).json(contact)
            
    } catch (err) {
        //500 means server error
        res.status(500).json({ message: err.message });
    }
};

const createContact = async (req, res) => {
    try {
        //Create a new contact
        const newContact = Contact({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        });
        //.save writes it into MongoDB
        const savedContact = await newContact.save();
        //201 means a new resource was created
        res.status(201).json(savedContact);

    } catch (err) {
        //500 means server error
        res.status(500).json({ message: err.message });
    }
};

const updateContact = async (req, res) => {
    try {
        //Update an existing contact using findByIdAndUpdate function
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidator: true } //new:true returns updated document, runValidator:true enforces schema rules
        );

        //Use an if statement to determine if contact exists
        if (!updateContact) {
            return res.status(404).json({ message: 'Contact not found' });
        };

        //200 means successful and data will be converted to JSON file
        res.status(200).json(updatedContact);

    } catch (err) {
        //500 means server error
        res.status(500).json({ message: err.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        //Delete an existing contact using findByIdAndDelete function
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);

        //Use an if statement to determine if contact exists
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        };

        //Otherwise return success message
        res.status(200).json({ message: 'Contact deleted successfully' });

    } catch (err) {
        //500 means server error
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
}