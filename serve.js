var express = require('express');
var app = express();

//Recursos
app.use(express.static(__dirname+'/'));

app.listen(3000);
console.log('server on port 3000');

//ruta a los archivos 
app.get('/', (req, res) => {
    res.sendFile('/home/ubuntu/projects/AS221S2-T10/Institucion.html')});