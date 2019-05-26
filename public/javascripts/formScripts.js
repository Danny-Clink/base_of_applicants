function sendData(){
	const data = {
		column: document.getElementById('selectColumn').value,
		sort: document.getElementById('selectMethod').value
	};



	(async () => {
		const rawResponse = await fetch('/write_to_file', {
		  method: 'POST',
		  headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		});
		const content = await rawResponse.json();
		console.log(content);
	  })();
}