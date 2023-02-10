/*

NOTE: THIS IS NOT THE ACTUAL SOURCE CODE!
IT'S JUST A SERVER THAT REDIRECTS TO THE GAME

VIEW THE SOURCE CODE: https://amongus-online.net/

THANK YOU!!!
*/

const express = require('express');

const app = express();

app.all('/*', function(req, res ) {
  res.redirect("https://surviv.io/"+req.originalUrl)
  console.log("Recieved req "+req.originalUrl)
})

app.listen(3000, () => {
  console.log('server started');
});
