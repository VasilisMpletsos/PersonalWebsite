const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/MyWebsite';

mongoose.connect(connectionURL,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10
})
