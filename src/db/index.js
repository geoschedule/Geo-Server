mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: "GeoHacks",
}
const db = () => Promise.resolve(mongoose.connect("mongodb://localhost:27017/Geo", options));



db()
.then( () => console.log("MongoDB is connected"))
.catch( e => console.log('There was an error with the connection' , e));