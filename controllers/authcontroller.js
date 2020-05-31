var exports = module.exports = {}
 
exports.register = function(req, res) {
  const successMessages = req.flash('success');
  const failMessages = req.flash('error');
  if (failMessages.length)
    res.render('register', { failMessages: failMessages });
  else if (successMessages.length)
    res.render('register', { successMessages: successMessages });
  else
    res.render('register');
}

exports.login = function(req, res) {
  const successMessages = req.flash('success');
  const failMessages = req.flash('error');
  if (failMessages.length)
    res.render('login', { failMessages: failMessages });
  else if (successMessages.length)
    res.render('login', { successMessages: successMessages });
  else
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