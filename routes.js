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

// routes.put('/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)
//         conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
//             if(err) return res.send(err)

//             res.send('book updated!')
//         })
//     })
// })


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