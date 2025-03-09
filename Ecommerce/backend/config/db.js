import mysql from 'mysql2'
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"ecommerse"
})

db.connect((err)=>{
    if (err) {
        console.log("err in the connection", err)
        
    } else {
        console.log("connection successful")
    }
})



export default db;