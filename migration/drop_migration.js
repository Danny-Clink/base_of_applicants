const Sequelize = require('sequelize');

const sequelize = new Sequelize('', 'root', 'strangerthings', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 10,
		min: 0,
		acquire: 3000,
		idle: 1000
	}
});

sequelize.query('DROP DATABASE `base_of_applicants`').then(() => {
	console.log('database is droped');
});