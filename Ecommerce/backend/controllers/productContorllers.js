import db from '../config/db.js'

const baseURL = 'http://localhost:7000'



function addProduct(req,res){
    const {brand_id,category_id,product_name,discription,stock,price} = req.body;
    
    try {
        const product_image  = req.file? req.file.filename:null;

        const q1 = `insert into product(product_name,discription,stock,price,category_id,brand_id,product_image)
        values ('${product_name}','${discription}','${stock}','${price}','${category_id}','${brand_id}','${product_image}')`

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

            if(result.length === 0){
                return res.status(404).send({msg:"No product found", success:false})

            }

            const products = result.map((product)=>({
                ...product, product_image:product.product_image?
                `${baseURL}/uploads/${product.product_image}`:null,
            }));
            res.status(200).send({products:products, success:true});
        });
        
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

            const products = result.map((product)=>({
                ...product, product_image: product.product_image?
                `${baseURL}/uploads/${product.product_image}`:null
            }));
            res.status(200).send({ products: products, success: true });
            });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).send({ msg: "Server error", success: false });        
    }
}





function totalProducts(req,res){
    try {
        
        db.query("select count(product_id) as totalProduct from product",(err,result)=>{
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



export default {
    addProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    filterProduct,
    getOneProduct,
    totalProducts
}