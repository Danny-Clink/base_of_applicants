module.exports = (sequelize, type) => {
	return sequelize.define('applicants', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: type.STRING,
			length: 250
		},
		birthday: {
			type: type.INTEGER
		},
		math: {
			type: type.INTEGER
		},
		history: {
			type: type.INTEGER
		},
		english: {
			type: type.INTEGER
		},
	},
	{
		timestamps: false
	});
};