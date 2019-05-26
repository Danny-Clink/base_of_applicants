const Joi = require('joi');

const createSchema = Joi.object().keys({
	name: Joi.string().required(),
	yearOfBirth: Joi.number().integer().positive().required(),
	math: Joi.number().integer().positive().required(),
	history: Joi.number().integer().positive().required(),
	english: Joi.number().integer().positive().required(),
});

module.exports = {
	create: (data) => {
		return new Promise((resolve, reject) => {
			const result = Joi.validate(data, createSchema);
			if(result.error) reject(result.error);
			resolve(!!result);
		});
	}
};