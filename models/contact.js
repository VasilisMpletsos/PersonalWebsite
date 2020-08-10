const mongoose = require('mongoose');

const Contact = mongoose.model('Contact',{
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  reason:{
    type: String,
  },
  email:{
    type: String
  }
})

module.exports = Contact;
