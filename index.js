const _express = require('express');
const _path = require('path');
const _app = _express();

_app.use(_express.static(__dirname + '/html'));

_app.get('/',(req,res)=>{
   res.sendFile(_path.join(__dirname +'/html/main.html'));
});
 
_app.listen(3000, () => {
  console.log("Starting at http://127.0.0.1:3000");
});