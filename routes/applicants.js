const express = require('express');
const router = express.Router();
const db = require('../database/database');
const validation = require('../validation/applicants');
const fs = require('fs');

const Applicants = require('../controllers/applicantsController');

router.get('/', async (req, res) => {
	const params = {
		column: 'id',
		sort: 'ASC'
	};

	const data = await Applicants.getData(params, db, res);

	res.render('index', { 'responseCode': 0, data: data });
});

router.post('/insertApplicants', async (req, res) => {
	const params = {
		name: req.body.name,
		yearOfBirth: req.body.yearOfBirth,
		math: req.body.math,
		history: req.body.history,
		english: req.body.english
	};

	if( !await validation.create(params)
		.catch((err) => {
			res.send({"statusCode": 500,
				"ErrorName": err.name,
				"ErrorDetails": err.details});
		})) return;

	Applicants.createApplicant(params, db, res);

	res.redirect('/');
});

router.post('/', async (req, res) => {
	const parseSort = (req.body.sort !== 'min -> max') ? 'DESC': 'ASC';
	const params = {
		column: req.body.column,
		sort: parseSort
	};

	const data = await Applicants.getData(params, db, res);

	res.render('index', { 'responseCode': 0, data: data });
});

router.post('/write_to_file', async (req, res) => {
	const parseSort = (req.body.sort !== 'min -> max') ? 'DESC': 'ASC';
	const params = {
		column: req.body.column,
		sort: parseSort
	};

	const data = await Applicants.getData(params, db, res);
	let writeData = [];

	for (let i = 0; i < data.length; i++){
		writeData.push(Applicants.writeFile(data[i]));
	}

	fs.writeFile('./export_files/applicants.txt', writeData, (err) => {
		if (err) console.log(err);

		console.log('saved');
	});
});

module.exports = router;