const express = require('express');
const router = express.Router();
const db = require('../database/database');

const Applicants = require('../controllers/applicantsController');

router.get('/', async (req, res) => {
	const data = await Applicants.getData(db);

	res.render('index', { 'responseCode': 0, data: data });
});

router.post('/insertApplicants', (req, res) => {
	const params = {
		name: req.body.name,
		dirthday: req.body.dirthday,
		math: req.body.math,
		history: req.body.history,
		english: req.body.english
	};

	db.createApplicant(params, db);

	res.redirect('/');
});

module.exports = router;