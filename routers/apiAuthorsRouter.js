const express=require('express');

const router=express.Router()

const {getAuthor,createAuthor,updateAuthor,deleteAuthor}=require('../controllers/apiAuthorsController')

router.get('/',getAuthor());
router.post('/create',createAuthor());
router.put('/update',updateAuthor());
router.delete('/delete',deleteAuthor());