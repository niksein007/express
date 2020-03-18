const fetch = require('node-fetch')




const starWars =  async(category)=>{
    
    let data = await fetch(`https://swapi.co/api/${category}/1`)
    
   return await data.json()


}

module.exports  = starWars