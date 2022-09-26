//database connectivity
const mysql=require('mysql');

//define connection string
const conUri=({
    host:'localhost',
    user:'root',
    password:'password',
    database:'ecommerce'
});

const con=mysql.createConnection(conUri);
con.connect((err)=>{
    if(!err){
        console.log("connection is successful with mysql DB");
    }
    else{
        console.log(err);
    }
});
module.exports=con;