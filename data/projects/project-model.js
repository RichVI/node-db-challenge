const db = require('../db-config');

module.exports = {
	getProjects,
	getResources,
	getTasks,
	getTasksWithProject,
	addProject,
	addTask,
	addResource,
};

function getProjects() {
	return db('projects');
}

function getResources() {
	return db('resources');
}

function getTasks() {
	return db('tasks');
}

function getTasksWithProject(id) {
	return db
		.select('tasks.*', 'projects.name', 'projects.description')
		.from('tasks')
		.join('projects', 'tasks.project_id', '=', 'projects.id')
		.where('projects.id', id);
}

function addProject(project) {
	return db('projects').insert(project);
}

function addTask(task) {
	return db('tasks').insert(task);
}

function addResource(resource) {
	return db('resources').insert(resource);
}

