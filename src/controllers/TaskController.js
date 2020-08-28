const Task = require('../models/Task');
const { update } = require('../models/Task');

module.exports = {
    async store(req, res){
        const { title, description, state} = req.body;        

        const task = await Task.create({
            title,
            description,
            state,
            active: true
        });

        return res.json(task);
    },
    async index(req, res){
        const { id } = req.params;                
        let task = {};
        if (id){
            task = await Task.findById(id);
            return res.json(task);
        }

        task = await Task.find().sort({state :false});

        return res.json(task);
    },
    async update(req, res){           
        const { id : _id, title, description, state} = req.body;                 
        let task = {};
        
        if (!title){
            task = await Task.updateOne({ _id: _id },{$set: { state }});
            return res.json(task);
        }
        
        task = await Task.updateOne({ _id: _id },{$set: { title, description }});
        return res.json(task);                
    },
    async delete(req, res){
        const { id } = req.query;        
        
        const task = await Task.findById(id);
        
        if (!task){
            return res.status(400).json({error: 'Task not exists.'});
        }

        const result = await Task.deleteOne({ "_id" : id });
        
        return res.status(200).json({success: 'The task has ben deleted.'});        
    }
};