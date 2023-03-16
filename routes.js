const express = require('express');
const routes = express.Router();

routes.get('/',(req,res) => {  // READ
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM books',(err,rows)=>{
            if(err) return res.send(err);

            res.json(rows);
        });
        
    });
});

routes.post('/',(req,res) => { //CREATE
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);

        conn.query('INSERT INTO books set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err);

            res.send('Book added!');
        });
        
    });
});

routes.put('/:id', (req, res)=>{ //UPDATE
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //conn.query('UPDATE books SET title=?, author=?, publishingHouse=? WHERE idBook=?', [req.body.title,req.body.author,req.body.publishingHouse, req.params.id], (err, rows)=>{
        //  o con menos palabras:
        conn.query('UPDATE books SET ? WHERE idBook=?', [req.body, req.params.id], (err, rows)=>{

            if(err) return res.send(err);

            res.send('book updated!');
        });
    });
});


routes.delete('/:id',(req,res)=>{ //DELETE
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);
        conn.query('DELETE FROM books WHERE idBook = ?',[req.params.id],(err,conn)=>{
            if(err) return res.send(err);
            res.send('Book deleted!');
        });
    });
});


module.exports = routes;