const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'strangerthings',
	database: 'base_of_applicants'
});

connection.connect((err) => {
	if (err) throw err;
});

class DB{
	executeAsync(sql, res){
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, result) => {
				if(err){
					console.log(sql);
					res.sendStatus(500);
					return;
				} else {
					resolve (result);
				}
			});
		});
	}
}

module.exports = new DB;