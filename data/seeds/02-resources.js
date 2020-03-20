exports.seed = async function(knex) {
  // Truncate ALL existing entries
  await knex('resources').truncate()
  // Inserts seed entries
	.then(() =>{
	return knex('resources').insert([
		{ project_id: '1', name: 'Test Resource 1', description: 'Test Resource Description 1'},
		{ project_id: '2', name: 'Test Resource 2', description: 'Test Resource Description 2'}
	])});
};
