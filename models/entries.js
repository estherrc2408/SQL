//Importamos las queries
const queries=require('./queries');

const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'black',
    password: 'admin'
})

//ACCEDER A LAS ENTRADAS POR EMAIL
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(queries.getEntriesByEmail,[email])
        console.log(data);
        result=data.rows


    } catch (error) {
        console.log(error)
        throw error
    } finally {
        client.release()
    }

   return result

}

//ACCEDER A TODAS LAS ENTRADAS

//CREAR UNA ENTRADA
//ELIMINAR UNA ENTRADA
//ACUALIZAR UNA ENTRADA

module.exports={
    getEntriesByEmail
}

