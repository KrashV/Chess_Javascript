const express = require('express');
const app = express();
const router = express.Router();
const config = require('../config/config.js');

router.get('/',function(req,res){
  res.send("Hello!");
});

app.use('/', router);
app.listen(config.port);

