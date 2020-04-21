var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
	app.get('/', (req,res)=>{
		res.redirect("/login");
	});
    app.get('/register', authController.register);

    app.get('/login', authController.login);

    app.post('/register', passport.authenticate('local-signup', {
            successRedirect: "/login",
            failureRedirect: "/register",
			failureFlash : true
        })
	);
 
    app.get('/play', isLoggedIn, authController.play);
 
    app.get('/logout', authController.logout);

    app.post('/login', passport.authenticate('local-signin', {
            successRedirect: '/play',
            failureRedirect: '/login',
			failureFlash : true
        }
    ));
	
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/login');
	};
}