const {Router} = require('express')
const router = Router()

// importing the starWars function from the lib folder
const starWars = require('../lib/starWars')


router.get('/', async(req,res)=>{
   
   
    
res.render('index')
})


router.post('/', async(req,res)=>{
    let category = req.body.category

    let data = await starWars(category)
    
    res.render('index',{data})


})

module.exports = router
