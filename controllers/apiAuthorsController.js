const {getAuthorsByEmail,getAllAuthors,createAuthor,updateAuthorByEmail,deleteAuthorByEmail}=require('../models/author')

const getAuthor=async(req,res)=>{
    let data;
    try{
        let email=req.query.email
        if(email){
            data=await getAuthorsByEmail(email)
        }else{
            data=await getAllAuthors()
        }
        res.status(200).json({
            ok:true,
            data
        })
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:'error al obtener autor(es)'
        })
    }
}

const createAuthor=async(req,res)=>{
    try{
        let name=req.query.name;
        let username=req.query.username;
        let email=req.query.email;
        let image=req.query.image;
        if(name && username && email && image){
            data=await createAuthor(name,username,email,image)
        }else{
            
        }
    }catch(error){

    }
}



module.exports={
    getAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}