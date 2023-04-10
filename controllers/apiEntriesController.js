const {getEntriesByEmail}=require('../models/entries')

const getEntries=async(req,res)=>{
    let data;
    try {
        let email=req.query.email
        if( email){
            data=await getEntriesByEmail( email)
        }else{
           // data=await getAllEntries()
        }
        res.status(200).json({
            ok:true,
            data
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'error al obtener las entradas'
        })
    }
  
}
const createEntries=async(req,res)=>{

}
const deleteEntries=async(req,res)=>{

}
const updateEntries=async(req,res)=>{

}
module.exports={
    getEntries,
    createEntries,
    deleteEntries,
    updateEntries
}

