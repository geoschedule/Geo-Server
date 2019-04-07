const mongoose = require('mongoose');

const server = 'localhost:27017';
const database = 'passport-tutorial'

const db = () =>
  Promise.resolve(
    mongoose.connect(
      `mongodb://${server}/${database}`
    )
  );

db()
  .then(() => console.log("> 🗄  Mongo connected"))
  .catch(e => console.log("> Mongo error ", e.message));