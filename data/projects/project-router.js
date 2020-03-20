const express = require('express');
const Projects = require('./project-model.js');
const router = express.Router();

module.exports = router;

//GET - Get all projects
router.get('/', (req, res) => {
	Projects.getProjects()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Unable to retrieve projects' });
		});
});

//POST - Add new project
router.post('/', (req, res) => {
	const newProject = req.body;
	Projects.addProject(newProject)
		.then((res) => {
			res.status(200).json({ message: 'New project added', project: newProject });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Unable to add project' });
		});
});
