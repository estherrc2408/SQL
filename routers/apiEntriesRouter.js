const express=require('express')

const router=express.Router()

const {createEntries,deleteEntries,getEntries,updateEntries} = require('../controllers/apiEntriesController')


router.get('/',getEntries);
router.post('/',createEntries);
router.delete('/:title',deleteEntries);
router.put('/:title',updateEntries);










module.exports=router
