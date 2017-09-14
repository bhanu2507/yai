
var express = require("express");
var mysql     = require('mysql');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/public'));

//passport
var passport = require('passport');
require('./server/config/passport')(passport); // pass passport for configuration

//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

// routes ======================================================================
require('./server/routes/auth.js')(app, passport);

schls = require('./server/schoolreg');
trns = require('./server/trainerreg');e
app.post('/putschool', schls.putschool);
app.post('/puttrainer', trns.puttrainer);
app.get('/listschools', schls.listschools);
app.get('/listtrainers', trns.listtrainers);
/*
app.get('/pstatus', pdtls.getprojectstatus);
app.get('/plist', pdtls.listprojects);
app.get('/tlist', pdtls.listtasks);
app.post('/updateprojectstatus', pdtls.updateprojectstatus);
app.post('/updatetaskstatus', pdtls.updatetaskstatus);
*/
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/bower_components', express.static(__dirname + '/bower_components/'));

port = process.env.PORT || 3300;

app.listen(port);
