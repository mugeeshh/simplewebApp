const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('hi i am there');
});


app.listen(8080, () =>{
console.log('listing on the port 3000');
});