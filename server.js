const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const port = process.env.PORT || 9000

app.use(express.static('build'));
app.use(express.json())
app.use(cors())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log('this is process.env', process.env)

app.get('/backend', (req, res) => {
  res.json({ works: 'yeah works woo'})
})

app.listen(port,() => {
  console.log('hi I am on port', port)
});
