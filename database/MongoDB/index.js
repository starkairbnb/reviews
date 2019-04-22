const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/starkbnb', { useNewUrlParser: true });

db = mongoose.connection;

module.exports = db;