
const mongoose = require('mongoose');

 

const issueSchema = new mongoose.Schema({

    title: {

        type: String,

        required: true

    },

 

    priority: {

        type: String,

        required: true,

        enum: ['High', 'Medium', 'Low']

    },

 

    description: {

        type: String

    },

 

    status: {

        type: String,

        default: 'Open',

        enum: ['Open', 'In progress', 'Resolved']

    },

  duedate:{
          type: Date
  }
});

 

module.exports = mongoose.model('issue', issueSchema);