const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const config = require('../config/config.js');

app.use(express.static(path.join(__dirname, '../public')));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(config.port);

