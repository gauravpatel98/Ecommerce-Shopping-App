import db from '../config/db.js'


function addBrand(req,res){
    const {brand_name} = req.body;
    try {
        const q1 = `insert into brand (brand_name) values ('${brand_name}')`;

        db.query(q1,(err,result)=>{
            if (err) throw err;
            res.status(201).send({msg:"Brand Added successfully",result:result,success:true})
        })

        
    } catch (error) {
        res.status(500).send({msg:"Server Error",status:false})
    }

}

function getAllBrand(req,res){
    const {brand_name} = req.body;
    try {
        const q2 = 'select * from brand';

        db.query(q2,(err,result)=>{
            if (err) throw err;
            res.status(201).send({msg:"All Brands Are Currently Showing",result:result,success:true})
        })
        
    } catch (error) {
        res.status(500).send({msg:"Server Error",status:false})
    }
}

function deleteBrand(req,res){
    const id = req.params.id;
    try {
        const q3 = 'delete from brand where brand_id = ?';
        db.query(q3,[id],(err,result)=>{
            console.log(result)
            if(err) throw err;
            if(result.length==0){
                res.status(400).send({msg:"Brand Not Found", success:false})
            }
            else{
                res.status(200).send({msg:"Brnad deleted successfully",result:result[0], success:true});
            }
        })
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}
function updateBrand(req,res){
    const id = req.params.id;
    const {brand_name} = req.body;
    try {
        const q3 = 'update brand set brand_name = ? where brand_id = ?';
        db.query(q3,[brand_name,id],(err,result)=>{
            console.log(result)
            if(err) throw err;
            if(result.length==0){
                res.status(400).send({msg:"Brand Not Found", success:false})
            }
            else{
                res.status(200).send({msg:"Brnad updated successfully",result:result[0], success:true});
            }
        })
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}


export default {
    addBrand,
    getAllBrand,
    deleteBrand,
    updateBrand
}