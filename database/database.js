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
	executeAsync(sql){
		return new Promise((resolve, reject) => {
			connection.query(sql, (err, result) => {
				if(err){
					console.log(sql);
				} else {
					resolve (result);
				}
			});
		});
	}
}

module.exports = new DB;