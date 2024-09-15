const mongoose = require('mongoose');
const { type } = require('os');

const postSchema = new mongoose.Schema({

    topic:{
        type:String,
        require:true
    }, 
    description:{
        type:String,
        require:true
    },
    postCategory:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('posts',postSchema);