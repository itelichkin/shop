const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4200;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/shop'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/shop/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(PORT,  function () {
  console.log('Express server listening on port ' + PORT);
});
