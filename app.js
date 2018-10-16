// require public methods
let express = require('express');
let http = require('http');
let path = require('path');
let config = require('config');
let url = require('url');

// require own methods
let log = require('lib/log')(module);

// require middleware-s
let favicon = require('serve-favicon');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

// favicon ico
app.use(favicon(path.join(__dirname, 'public', 'img', 'icon.png')));

// log
if (app.get('env') === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('default'));
}

// save in req.body (form, json)
app.use(bodyParser.urlencoded({extended: false}));

// save in req.cookies (cookies) argument - secret code
app.use(cookieParser());


// for get in link / do function
app.get("/", function (req, res, next) {
    res.render("index", {
        page: 'home'
    });
});

// default code
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.use(function(req, res, next){
    console.log("body");
    console.log(res);
    console.log(res.body["IncomingMessage"]);
    // let url_parts = url.parse(request.url, true);
    // let query = url_parts.query;
    res.render("index", {
        page: '404'
    });
});

/*

var routes = require('./routes');
var user = require('./routes/user');

// all environments

app.get('/', routes.index);
app.get('/users', user.list);

*/

http.createServer(app).listen(config.get('port'), function () {
    log.info('Express server listening on port ' + config.get('port'));
});

