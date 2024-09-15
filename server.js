const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//import routes
const postRoutes = require('./routes/posts');


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);


const port = 8000;
const DB_URL = 'mongodb+srv://user:user123@cluster0.vapvu.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error'));

app.listen(port, () => {
    console.log('App is running on',port);
});