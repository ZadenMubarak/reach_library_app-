'reach 0.1'

"##############################################################################"
//publish a book to the blockchain and get paid in tokens
//A library application to store book records and for purchasing books.
//
'##############################################################################'

import React from 'react';

const user_cash = 10000;
const system_pays = 50;
const record = 'db'
//rules for books purchasing =list of all the books in alphabetical order search for book of choice,or search genre 
//if book not in tha database then system just does the thing man
var rules_to_buy = ['1.\n']
//sign up database
//log in part of database
//publisher
//main library db

var sign_up = require('mysql');

const conn_sign_up = mysql.createConnection({
    'name':'',
    'email': "",
    'username':'""',
})

conn_sign_up.connect(function(err){
    console.log('sign getting ready!!')
    var sql = "CREATE TABLE  user_ifo(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), username VARCHAR(255), email_addr VARCHAR(255))";
    conn_sign_up.query(conn_sign_up, function (err, result) {
        if (err) throw err;
        console.log("Table created");
            })
})

class Dashboard extends React.Component{
    ''
}

export const main = React.App(() =>{
    function insert_to_db(author, book_title, genre){
        var mysql = require('mysql');
        const conn = mysql.createConnection({
          'Author':author,
          'title':book_title,
          'genre':genre
        })
    };

        conn.connect(function(err){
            console.log('\033[36m database connected!');
            var sql = "CREATE TABLE  (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
            conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
                })
            
        return ''
      

    const user = Participant('reader', { 
        //
     });
    const system = Participant('librarian', {
        //systems blah
    });

    const publisher = Participant('publisher',{
        //publish a book to db and get paid
        
    });
});
