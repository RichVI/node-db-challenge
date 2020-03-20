exports.seed = async function(knex) {
  // Truncate ALL existing entries
  await knex('tasks').truncate()
  // Inserts seed entries
	.then(() =>{
	return knex('tasks').insert([
		{ project_id: '1', description: 'Test Task Description 1', notes: 'Test Task Note 1', completed: 'false'},
		{ project_id: '2', description: 'Test Task Description', notes: 'Test Task Note 2', completed: 'false'}
	])});
};
