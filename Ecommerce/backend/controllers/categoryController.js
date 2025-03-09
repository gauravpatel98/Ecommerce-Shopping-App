import db from '../config/db.js'

function addCategory(req,res){
    try {
        const q1 = `insert into category (category_name) values ('${req.body.category_name}')`;
        db.query(q1,(err,result)=>{
            if(err) throw err;
            res.status(200).send({msg:"Category added successfully", success:true});
        })
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}

function getAllCategory(req,res){
    try {
        const q2 = `select * from category`;
        db.query(q2,(err,result)=>{
            if(err) throw err;
            res.status(200).send({Categories:result, success:true});
        })
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}

function deleteCategory(req,res){
    const id = req.params.id
    try {
        const q3 = `delete from category where category_id = ?`;
        db.query(q3,[id],(err,result)=>{
            console.log(result)
            if(err) throw err;
            if(result.length==0){
                res.status(400).send({msg:"Category Not Found", success:false})
            }
            else{
                res.status(200).send({msg:"Category deleted successfully",result:result[0], success:true});
            }
        })
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}

function updateCategory(req,res){
    const id = req.params.id;
    const {category_name} = req.body;
    try {
        const q3 = `update category  set category_name = ? where category_id = ?;`
        db.query(q3,[category_name, id],(err,result)=>{
            console.log(result)
            if(err) throw err;
            if(result.length==0){
                res.status(400).send({msg:"Category Not Found", success:false})
            }
            else{
                res.status(200).send({msg:"Category updated successfully",result:result[0], success:true});
            }
        })
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}

export default {
    addCategory,
    getAllCategory,
    deleteCategory,
    updateCategory
}