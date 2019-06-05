let express = require('express');
let app = express();

app.get('/', function(req, res) {
	res.send('<h1>hello world</h1>');
});

app.listen(3000);
console.log('Servidor rodando na porta 3000');
