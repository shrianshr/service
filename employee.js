var express = require('express');
var app = express();


var customerController=function (req, res) {
  console.log("calling rest api");
  var employee=[
            {firstName:'Ravi',lastName:'Tambade',age:43},
            {firstName:'Prashant',lastName:'Karhale',age:43},
            {firstName:'Rohit',lastName:'Puranik',age:28},
            {firstName:'Shiv',lastName:'Kumar',age:25},
            {firstName:'Manoj',lastName:'Pande',age:23}
      ];
  res.send(employee);
};


app.get('/employee',customerController );

var server = app.listen(8085, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8085", host, port)
})
