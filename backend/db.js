const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook?tls=false';

const connectTOMongo = () => {
  mongoose.connect(mongoURI, (res,req) => {

    try{
      console.log("Connect to Mongo Successfully");
    }catch(error){
      res.status(401).send({ error: "Error" })
    }
  })
}


module.exports = connectTOMongo;