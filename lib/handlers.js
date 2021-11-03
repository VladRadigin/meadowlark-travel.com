const fortune = require('./fortune');

exports.about = (req, res) => res.render('about');

exports.home = (req, res) => res.render('home', { fortune: fortune.getFortune() });

exports.notFound = (req, res) => res.render('404');

exports.serverError = (err, req, res, next) => res.render('500');