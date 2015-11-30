var express = require('express'),
    port = 8080
var app = express();

app.use(express.static(__dirname + '/public'))
app.get('/interest_rate', (req, res) => res.json({
  interestRate: (Math.random() / 5).toFixed(2)
}))
app.listen(port, (err) => {
  if(err){
    console.log(err);
  } else {
    console.log('Listening on ' + port)
    console.log('Static directory: ' + __dirname);
  }
})
