var indexController = require('../controllers/indexcontroller.js');
 
 
module.exports = function(app) {
 
 
    app.get('/', indexController.home);
 
 
    app.get('/home', indexController.home);
 
}