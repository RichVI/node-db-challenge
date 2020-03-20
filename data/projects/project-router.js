const express = require('express');
const Projects = require('./project-model.js');
const router = express.Router();

module.exports = router;

// GET - Get all projects
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

// GET - Get all tasks
router.get('/tasks', (req, res) => {
	Projects.getTasks()
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Unable to retrieve tasks' });
		});
});

// GET - Get all tasks by ID
router.get('/:id/tasks', (req, res) => {
	const id = req.params.id;

	Projects.getTasksWithProject(id)
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Unable to retrieve tasks with this id' });
		});
});

// GET - Get all resources
router.get('/resources', (req, res) => {
	Projects.getResources()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Unable to retrieve resources' });
		});
});

// POST - Add new project
router.post('/', (req, res) => {
	const newProject = req.body;
	Projects.addProject(newProject)
		.then((response) => {
			res.status(200).json({ message: 'New project added', project: newProject });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Unable to add project' });
		});
});

// POST - Add new task
router.post('/task', (req, res) => {
	const newTask = req.body;

	if (!req.body.project_id) {
		res.status(404).json({ message: 'project_id is required' });
	}
	else {
		Projects.addTask(newTask)
			.then((response) => {
				res.status(200).json({ message: 'New task added', task: newTask });
			})
			.catch((error) => {
				console.log(error);
				res.status(500).json({ message: 'Unable to add task' });
			});
	}
});

// POST - Add new resource
router.post('/resources', (req, res) => {
	const newResource = req.body;

	if (!req.body.project_id) {
		res.status(404).json({ message: 'project_id is required' });
	}
	else {
		Projects.addResource(newResource)
			.then((response) => {
				res.status(200).json({ message: 'New resource added', resource: newResource });
			})
			.catch((error) => {
				console.log(error);
				res.status(500).json({ message: 'Unable to add resource' });
			});
	}
});

