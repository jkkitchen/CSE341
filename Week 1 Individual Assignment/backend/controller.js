const Professional = require('./model');


const getData = async (req, res) => {
    try {
        const data = await Professional.findOne(); //gets first document
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getData };