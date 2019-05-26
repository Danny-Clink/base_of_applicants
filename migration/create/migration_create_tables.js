const Sequelize = require('sequelize');
const applicantsModel = require('../models/applicants');

const sequelize = new Sequelize('base_of_applicants', 'root', 'strangerthings', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 10,
		min: 0,
		acquire: 3000,
		idle: 1000
	}
});

class Tables{
	createTable(){
		applicantsModel(sequelize, Sequelize);

		sequelize.sync({force: true})
			.then(() => {
				console.log('tables created');
			});
	}
}

module.exports = Tables;