exports.seed = async function(knex) {
	// Truncate ALL existing entries
	await knex('projects').truncate()
	// Inserts seed entries
	.then(() =>{
	return knex('projects').insert([
		{ name: 'Test Project 1', description: 'Test Project description 1', completed: 'false' },
		{ name: 'Test Project 2', description: 'Test Project description 2', completed: 'false' }
	])});
};
