class Model{
	async getData(params, db, res){
		if (params.column === 'totalScore'){
			params.column = `(math + history + english)`;
		}
		const sql = `SELECT
			id,
			name,
			year_of_birth as yearOfBirth,
			math,
			history,
			english,
			(math + history + english) as "totalScore"
			FROM applicants
			ORDER BY ${params.column} ${params.sort}`;

		const result = await db.executeAsync(sql, res);

		return result;
	}

	createApplicant(params, db, res){
		const sql = `INSERT INTO applicants
			(
				name,
				year_of_birth,
				math,
				history,
				english
			)
			VALUE
			(
				'${params.name}',
				${params.yearOfBirth},
				${params.math},
				${params.history},
				${params.english}
			);`;

		db.executeAsync(sql, res);
	}

	writeFile(data){
		let text = JSON.stringify({
			id: data.id,
			name: data.name,
			yearOfBirth: data.yearOfBirth,
			math: data.math,
			history: data.history,
			english: data.english,
			totalScore: data.totalScore
		});

		const result = text.toString() + '\n';

		return result;
	}

}

module.exports = new Model;