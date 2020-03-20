const express = require('express');
const server = express();

const ProjectRouter = require('./data/projects/project-router.js');
server.use(express.json());
server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Sprint Challenge - Server is running' });
});

module.exports = server;
