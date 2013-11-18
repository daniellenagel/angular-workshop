var http 	= require('http'),
	express = require('express'),
	users	= require('./users'),
	app 	= express();

// app config
app.set('port', process.env.PORT || 9000);
app.use(express.static('public'));

// get all users
app.get('/users', function(req, res) {
	return res.send(users);
});

// get one user
app.get('/user', function(req, res) {
	if(typeof(req.query.id) == 'undefined') {
		return res.send({});
	} else {
		return res.send(users[req.query.id]);
	}	
});

// update a value
app.get('/update', function(req, res) {
	if(typeof(req.query.id) == 'undefined' || typeof(req.query.field) == 'undefined' || typeof(req.query.val) == 'undefined') {
		return res.send({});
	} else {
		var user = users[req.query.id];
		user[req.query.field] = req.query.val;
		users[req.query.id] = user;

		return res.send(user);
	}
});

// create the server
http.createServer(app).listen(app.get('port'), function() {
	return console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});