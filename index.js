const express = require('express');
const cors = require('cors');
const mysql = require('mysql')

const app = express();
const path = require('path');
const port = process.env.PORT || 5000
const SELECT_ALL_BIKES_QUERY = 'SELECT * FROM bikes';
const SELECT_ALL_PARTS_QUERY = 'SELECT * FROM parts';
const SELECT_ALL_ITEMS_QUERY = 'SELECT * FROM item_master';
const SELECT_ALL_PSITEMS_QUERY = 'SELECT * FROM product_structure';

const SELECT_MRFG_QUERY = "SELECT im.im_item_no, im.im_desc, im.im_itemtype  FROM item_master im WHERE im.im_itemtype = 'fg'";
const JAWSDB_URL = "mysql://q3vkaci9rd4kof20:eoi2k4tb4y8weyr4@durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s2ccpvy7askck4c4"



if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    //
    app.get('*', (req, res) => {
      res.sendfile(path.join(__dirname = 'client/build/index.html'))
    })
  }

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'Jon',
//     password: '12345',
//     database: 'BikeDB'
// })

const connection = mysql.createConnection({
    host: 'durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'q3vkaci9rd4kof20',
    password: 'eoi2k4tb4y8weyr4',
    database: 's2ccpvy7askck4c4'
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /bikes to see bikes, got to /parts to see parts')
});
app.get('/parts', (req, res) => {
    connection.query(SELECT_ALL_PARTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});
app.get('/psitems', (req, res) => {
    connection.query(SELECT_ALL_PSITEMS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});
app.get('/bomx', (req, res) => {
    const { im_item_no, grossqty } = req.query;
    const SELECT_BOMX_QUERY = `CALL BomExplode('${im_item_no}','${grossqty}')`
    // const {mrfgbike} = this.state;
    // // const {mrfgbike.mrfgid,mrfgbike.mrfgqty}= req.query;
    // const SELECT_BOMX_QUERY=`CALL BomExplode('${mrfgbike.mrfgid}','${mrfgbike.mrfgqty}')`;
    // const SELECT_BOMX_QUERY="CALL BomExplode('BX-0004',1400)";
    // http://localhost:4000/bomx?im_item_no=BX-0004&grossqty=60
    connection.query(SELECT_BOMX_QUERY, (err, results) => {
        console.log("query response")
        console.log(SELECT_BOMX_QUERY)
        console.log(results)
        if (err) {
            return res.send(err)

        }
        else {

            return res.json({
                data: results
            })
        }
    });
});
app.get('/boml', (req, res) => {
    const { im_item_no } = req.query;
    const SELECT_BOML_QUERY = `CALL BomList('${im_item_no}')`
    // const {mrfgbike} = this.state;
    // // const {mrfgbike.mrfgid,mrfgbike.mrfgqty}= req.query;
    // const SELECT_BOMX_QUERY=`CALL BomExplode('${mrfgbike.mrfgid}','${mrfgbike.mrfgqty}')`;
    // const SELECT_BOMX_QUERY="CALL BomExplode('BX-0004',1400)";
    // http://localhost:4000/bomx?im_item_no=BX-0004&grossqty=60
    connection.query(SELECT_BOML_QUERY, (err, results) => {
        console.log("query response")
        console.log(SELECT_BOML_QUERY)
        console.log(results)
        if (err) {
            return res.send(err)

        }
        else {

            return res.json({
                data: results
            })
        }
    });
});
// get all items that have fg as a descriptio using select where sql statment
app.get('/mrfg', (req, res) => {
    connection.query(SELECT_MRFG_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});
app.get('/items', (req, res) => {
    connection.query(SELECT_ALL_ITEMS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});
app.get('/bikes/add', (req, res) => {
    const { bk_name, bk_color } = req.query;
    const INSERT_BIKES_QUERY = `INSERT INTO bikes (bk_name,bk_color) VALUES('${bk_name}','${bk_color}')`
    // console.log( bk_name, bk_color);
    connection.query(INSERT_BIKES_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added product')
        }
    });
});

// app.get('/items/add', (req, res)=>{
//     const {im_item_no,im_desc,im_uofm,im_oh,im_itemtype}= req.query;
//     const INSERT_ITEMS_QUERY =`INSERT INTO item_master (im_item_no,im_desc,im_uofm,im_oh,im_itemtype) VALUES('${im_item_no}','${im_desc}','${im_uofm}','${im_oh},'${im_itemtype}')`    
//     connection.query(INSERT_ITEMS_QUERY, (err, results) => {
//     if(err) {
//         return res.send(err)
//     }
//     else{
//         return res.send('successfully added product')
//     }
// });
// });
app.get('/items/add', (req, res) => {
    const { im_item_no, im_desc, im_uofm, im_oh, im_itemtype } = req.query;
    const INSERT_ITEMS_QUERY = `INSERT INTO item_master (im_item_no,im_desc,im_uofm,im_oh,im_itemtype) VALUES('${im_item_no}','${im_desc}','${im_uofm}','${im_oh}','${im_itemtype}')`
    connection.query(INSERT_ITEMS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added product')
        }
    });
});

app.get('/bikes', (req, res) => {
    connection.query(SELECT_ALL_BIKES_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));
  
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
  }
app.listen(process.env.PORT || 4000)
// app.listen(4000, () => {
//     console.log('to to /bikes for bikes server')
// });

