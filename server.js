const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000

app.use(express.static('build'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/backend', (req, res) => {
  res.send({ express: 'Your backend is connected to react' })
})

app.listen(port);
