const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
});

//Mongoose automatically converts the model name to lowercase and pluralizes it and uses that as the collection name
//You can override this by including the collection name as a 3rd parameter, example ('Contact, contactSchema, 'contacts')
//'Contact' is now the name for this model that mongoose will use internally, it's not necessarily related to variable names I use
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;