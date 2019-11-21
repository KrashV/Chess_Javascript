var exports = module.exports = {}
 
exports.home = function(req, res) {
 
    res.sendFile('./index.html', { root: __dirname + "../../.."});
 
}