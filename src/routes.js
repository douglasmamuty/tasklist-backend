const express = require('express');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

routes.post('/task', TaskController.store);
routes.get('/task', TaskController.index);
routes.put('/task', TaskController.update);
routes.delete('/task', TaskController.delete);
routes.get('/task/:id', TaskController.index);

module.exports = routes;