//importamos las queries
const queries=require('./queries');

const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'black',
    password: 'admin'
})

//ACCEDER A LOS AUTORES POR EMAIL
const getAuthByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(queries.getAuthorsByEmail,[email])
        result=data.rows

    } catch (error) {
        throw error
    } finally {
        client.release()
    }
    return result
}

//TRAER TODOS LOS AUTORES
const getAllAuthors = async()=>{
    let client, results;
    try{
        client=await pool.connect()
        const data = await client.query(queries.getAllAuthors)
        console.log(data);
        results=data.rows
    }catch(error){
        throw error
    }finally{
        client.release()
    }
    return results
}
//CREAR AUTOR
const createAuthor = async(name,username,email,image)=>{
    let client, result;
    try{
        client=await pool.connect()
        const data=await client.query(queries.createAuthor,[name,username,email,image])
        console.log(data);
    }catch(error){
        
    }finally{
        client.release()
    }
//return???
    return data
}
//ELIMINAR AUTOR
const deleteAuthorByEmail=async(email)=>{
    let client, result;
    try{
        client=await pool.connect()
        const data=await client.query(queries.deleteAuthorByEmail,[email])
    }catch(error){
        throw(error)
    }finally{
        client.release()
    }
}
//ACTUALIZAR AUTOR

module.exports={
    getAuthByEmail,
    getAllAuthors,
    createAuthor,
    updateAuthorByEmail,
    deleteAuthorByEmail
}