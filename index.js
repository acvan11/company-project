const express = require('express');

const app = express();

app.get('/', (req, res)=> {
	res.send('okay')
	console.log('hello');
}); 

app.listen(3000);