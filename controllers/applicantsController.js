class Model{
	async getData(db){
		const sql = `SELECT * FROM applicants`;

		const result = await db.executeAsync(sql);

		return result;
	}

}

module.exports = new Model;