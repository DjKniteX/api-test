var express = require("express");
var app = express();
let holidays = [{
    'holiday': 'Columbus Day',
    'date': 'October 8, 2018'
},
{
    'holiday': 'Veterans Day',
    'date': 'November 12, 2018'
},
{
    'holiday': 'Thanksgiving',
    'date': 'November 22, 2018'
},
{
    'holiday': 'Christmas',
    'date': 'December 25, 2018'
},
{
    'holiday': 'New Years Eve',
    'date': 'December 31, 2018'
},
{
    'holiday': 'New Years Day',
    'date': 'January 1, 2018'
},
{
    'holiday': 'Martin Luther King, Jr. Day',
    'date': 'January 15, 2019'
},
{
    'holiday': 'Presidents Day',
    'date': 'February 19, 2019'
},
{
    'holiday': 'Memorial Day',
    'date': 'May 28, 2019'
},
{
    'holiday': 'Independence Day',
    'date': 'July 4, 2019'
},
{
    'holiday': 'Labor Day',
    'date': 'September 3, 2019'
}
];

app.get("/", (req, res, next) => {
    res.send("Testing")
});

app.get("/api/v1/businessdates/", (req, res, next) => {
    res.json(holidays)
});

app.get('/api/v1/businessDates/*', function (req, res) {
    res.send(req.params)
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log(holidays[0].holiday)
});