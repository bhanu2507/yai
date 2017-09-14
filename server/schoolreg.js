

var conn = require('./db');
var mysql      = require('mysql');
var connection = mysql.createConnection(conn.db);


exports.putschool = function(req, res) {

    let sqls = "INSERT INTO schools (`name`,\n" +
        "`owner`,\n" +
        "`qualifications`,\n" +
        "`address`,\n" +
        "`townandcounty`,\n" +
        "`postalcode`,\n" +
        "`tel`,\n" +
        "`fax`,\n" +
        "`email`,\n" +
        "`webaddress`,\n" +
        "`desc`,\n" +
        "`youtubelink`,\n" +
        "`logo`) VALUES(\n" +
        "'" + req.query.name + "',\n" +
        "'" + req.query.owner + "',\n" +
        "'" + req.query.qual + "',\n" +
        "'" + req.query.add + "',\n" +
        "'" + req.query.tnc + "',\n" +
        "'" + req.query.pcode + "',\n" +
        "'" + req.query.tel + "',\n" +
        "'" + req.query.fax + "',\n" +
        "'" + req.query.mail + "',\n" +
        "'" + req.query.web + "',\n" +
        "'" + req.query.desc + "',\n" +
        "'" + req.query.ylink + "',\n" +
        "'" + req.query.logo + "');\n"
 //console.log(sqls);
    connection.query(sqls, function (err, rows, fields) {
        if (!err) {
            //console.log('The solution is: ', rows);
             //console.log(err.message);
            res.send(rows);
        }
        else
            console.log(err.message);
    });

}

exports.listschools = function(req,res) {
    connection.query("Select * from schools;", function (err, rows, fields) {
        if (!err) {
            //console.log('The solution is: ', rows);
            //console.log(err.message);
            res.send(rows);
        }
        else
            console.log(err.message);
    });
}