const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description: {
        type: String
    },
    state: {
        type: Boolean
    },
    active:{
        type:Boolean,        
    }
}, {
    timestamps: true,
});

module.exports = model('Task', TaskSchema);