const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv').config();

const issueroutes = require('./routes/issueroutes');

const app = express();

app.use(cors());

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/issueDB')

    .then(() => console.log('MongoDB Connected.......'))

    .catch(err => console.log(err));

 

app.use('/api/issues', issueroutes);

 

const PORT = process.env.PORT || 5000;

 

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
