/*globals require, console, process */

var express = require('express');
var bodyParser = require('body-parser');
var Area = require('./area')
// instantiate express
const app = express();


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set our port
var port = process.env.PORT || 8080;


// get an instance of the express Router
var router = express.Router();

var lati = []

/*function getArea() {
    if (lati.length == 2) {
        if (!isNaN(lati[0]) && !isNaN(lati[1])) {
            if (lati[0] >= 0 && lati[1] >= 0) {
                var res = lati[0] * lati[1]
                return res
            }
        }
    }
    return -1
}*/

// test route to make sure everything is working
router.get('/', function(req, res) {
    //res.json({ message: 'welcome to our api!' });

    if (req.query.side1 && req.query.side2) {
        side1 = req.query.side1;
        side2 = req.query.side2;

        lati.push(side1)
        lati.push(side2)

        var area = Area.getArea(lati)

        if (area != -1) {
            res.json({ area: area })
            res.status(200)
        } else {
            res.json({
                "area": "-1",
                "errore": "non ci sono i parametri"
            })
            res.status(400)
        }

    } else {
        res.json({
            area: "-1",
            errore: "non ci sono i parametri"
        })
        res.status(400)
    }

});

// middleware route to support CORS and preflighted requests
app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});

// register our router on /api
app.use('/getArea', router);

// handle invalid requests and internal error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } });
});


app.listen(port);
console.log('Magic happens on port ' + port);