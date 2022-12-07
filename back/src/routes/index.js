const { Router } = require('express');
const fetch  = require("node-fetch");
const {Task} = require('../db.js');


const router = Router();




router.put("/tasks", function(req, res){
 
    try {
        const {id,state} = req.body
        Task.update({state:state},{where :{id}})
        res.status(200).send("ok!")
    } catch (error) {
        console.log(error)
    }

})


var data = []

router.get("/tasks", async (req,res) =>{
  
        const Alltasks = await Task.findAll()
        if(Alltasks.length){
            res.json(Alltasks)
        }else{
         const titlesCrudo = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences`)
            const titles = await titlesCrudo.json()
            const arr = titles[0].split(".")
            arr.slice(0,arr.length-1).forEach(async element => {
            data = [...data,element]
               const creación = await Task.create({title:element})
            });
            var AllInDb = await Task.findAll()
            while (AllInDb.length!==arr.length-1) {
                AllInDb = await Task.findAll()
            }
            res.json(AllInDb)
        }
})


router.get("/newtasks", async (req,res) =>{
  
        data.forEach(async element => {
            const eliminacion = await Task.destroy({where:{title:element}})
        })

        const titlesCrudo = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences`)
        const titles = await titlesCrudo.json()
        const arr = titles[0].split(".")
        arr.slice(0,arr.length-1).forEach(async element => {
           data = [...data,element]
           const creación = await Task.create({title:element})
        });
        var AllInDb = await Task.findAll()
            while (AllInDb.length!==arr.length-1) {
                AllInDb = await Task.findAll()
            }
            res.json(AllInDb)
})





module.exports = router;
