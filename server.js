
//  Node.js  - Making a server

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));



app.listen(8000);
console.log('Working on 8000');
