const express=require('express')

const app=express()
const port=process.env.PORT || 3000;


// Body-parser middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(__dirname+'/public'))


app.use('/api/entries',require('./routers/apiEntriesRouter'))
app.use('/api/authors',require('./controllers/apiAunthorRouter'))


app.listen(port,()=>{
    console.log(`servidor a la escucha del ${port}`)
})
