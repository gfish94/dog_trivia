// 0. Index is the Entry point
// require mongoose after running npm install mongodb
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

// const { ATLAS_PASSWORD } = process.env;

const uri = 'mongodb+srv://dogagotchi:5M0u9BvJUfwNcQZZ@dogtrivia.gxhy4jj.mongodb.net/dogtrivia';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

// setup schema(s)
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // may be changed with passport implementation
  coins: Number,
  breeds: [String],
});
// creates user docs in the db
const User = mongoose.model('User', userSchema);
// schema for Dogs
const dogSchema = new mongoose.Schema({
  name: String,
  img: String,
  isHungry: Boolean,
  isHappy: Boolean,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = {
  User,
  Dog,
};
