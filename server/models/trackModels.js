const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://harrynam:harrynam7@cluster0.e2sc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'vibecheck'
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log('Error connecting to MongoDB', err));

const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title: String,
    artist: String, 
    album: String,
})

const Track = mongoose.model('track', trackSchema);