const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Angular-pgm'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Angular-pgm/index.html'));
  });

  app.listen(process.env.PORT || 3000);
