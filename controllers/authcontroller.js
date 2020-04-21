var exports = module.exports = {}
 
exports.register = function(req, res) {
    res.render('register');
}

exports.login = function(req, res) {
    res.render('login');
}

exports.play = function(req, res) {
	res.locals.currentUser = req.user;
    res.render('play', {userName: res.locals.currentUser.username});
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}