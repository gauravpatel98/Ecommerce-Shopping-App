import db from '../config/db.js'

function addProduct(req,res){
    const brand_id = req.body.brand_id;
    const category_id = req.body.category_id;
    try {
        const q1 = `insert into product(product_name,discription,stock,price,category_id,brand_id)
        values ('${req.body.product_name}','${req.body.discription}','${req.body.stock}','${req.body.price}','${category_id}','${brand_id}')`

        db.query(q1,(err,result)=>{
            if(err) throw err;
            res.status(201).send({msg:"updation Successful", result:result, success:true})
        })
        
    } catch (error) {
        res.status(500).send({msg:"server error" , success:false})
        
    }
}
function getAllProduct(req,res){
    try {
        const q2 = `select * from product`
        db.query(q2,(err,result)=>{
            if(err) throw err;
            res.status(202).send({msg:"showing all the product available", result:result, success:true})
        })
        
    } catch (error) {
        res.status(500).send({msg:"server error" , success:false})
        
    }
}
function getOneProduct(req,res){
    const id = req.params.id
    try {
        const q6 = `select * from product where product_id = ?`
        db.query(q6,[id],(err,result)=>{
            if(err) throw err;
            res.status(202).send({msg:"showing the only product available", result:result, success:true})
        })
    } catch (error) {
        res.status(500).send({msg:"server error" , success:false})
        
    }
}

function updateProduct(req,res){
    const id = req.params.id;
    const {product_name,discription,stock,price} = req.body
    try {
        const q3 = `update product set product_name = ?,discription=?, stock=?, price=? where product_id = ?  `
        db.query(q3,[product_name,discription,stock,price,id],(err,result)=>{
            if(err) throw err;
            res.status(202).send({msg:"showing all the product available", result:result, success:true})
        })
        
    } catch (error) {
        res.status(500).send({msg:"server error" , success:false})
        
    }
}

function deleteProduct(req,res){
    const id = req.params.id;
    try {
        const q4 = `delete from product where product_id = ${id}  `
        db.query(q4,(err,result)=>{
            if(err) throw err;
            res.status(202).send({msg:"product deleted", result:result[0], success:true})
        })
        
    } catch (error) {
        res.status(500).send({msg:"server error" , success:false}) 
    }
}

function filterProduct(req,res){
    const {product_name} = req.params;
    try {
        const q5 = `SELECT * FROM product WHERE product_name LIKE ?`;
        db.query(q5,[`%${product_name}%`],(err,result)=>{
            if (err) {
                console.error("Database query error:", err);
                return res.status(500).send({ msg: "Database error", success: false });
            }
            if (result.length > 0) {
                res.status(200).send({ msg: "Products found", result: result, success: true });
            } else {
                res.status(404).send({ msg: "Product not found", success: false });
            }
            })
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).send({ msg: "Server error", success: false });        
    }
}

export default {
    addProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    filterProduct,
    getOneProduct
}