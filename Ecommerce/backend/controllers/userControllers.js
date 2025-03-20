import db from "../config/db.js";
import jwt from 'jsonwebtoken'

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        db.query('SELECT * FROM user where email = ? and password = ?',[email, password], (err, result) => {
            if (err) throw err;
            const payload = {id:result[0].id,role:result[0].role,name:result[0].name}
            const token = jwt.sign(payload, 'batch40',{expiresIn:'1h'})
            res.status(200).send({msg:"Login Successfull" , token:token,success:true});
        });

    } catch (error) {
        res.status(500).send({ msg: "Server Error", success: false })
    }
}

function register(req, res) {
    try {
        // console.log(req.body);
        const q1 = `insert into user (name, email, password,role) 
        values('${req.body.name}' ,'${req.body.email}','${req.body.password}','${req.body.role}')`;
    
        db.query(q1, (err, result) => {
          if (err) throw err;
            res.status(200).send({ mgs: "Register success", success: true });
       
            // res.status(200).send({ mgs: "Register unsuccess", success: false });
        });
      } catch (error) {
        res.status(500).send({ msg: "server Error" });
      }
}

function getUserInfo(req, res) {
    console.log(req.user)
  try {
    console.log("1234567890")
    res.status(200).send({user:req.user})
  } catch (error) {
    res.status(500).send({ msg: "server Error" });
  }
}

export default {
    register,
    login,
    getUserInfo
}