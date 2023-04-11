const express = require("express");
const mongoose=require('mongoose');
const router = express.Router();

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/Crud-app');

const userSchema=new mongoose.Schema({
    id:Number,
    name:String
});

router.get("/", (req, res) => {
  res.send('all users'); 
});

router.get("/new", (req, res) => {
  res.render("users/form");
});

router.post("/", async(req, res) => {  
    
    const insertNew=async()=>{
        const profile=mongoose.model('users',userSchema);
        const data=new profile(
            {
                id:1,
                name:req.body.firstName
            }
        )
        await data.save();
    }
    
        insertNew();
      console.log(req.body.firstName)
      res.redirect('/users');
    });
    


//this code will be replaced by

// router.get('/:id',(req,res)=>
// {
//     res.send(`Get the user with id ${req.params.id}`)
// })

// router.put('/:id',(req,res)=>
// {
//     res.send(`Get the user with id ${req.params.id}`)
// })

// router.delete('/:id',(req,res)=>
// {
//     res.send(`Get the user with id ${req.params.id}`)
// })

//this

router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.user);
    res.send(`Get the user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get the user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get the user with id ${req.params.id}`);
  });



//it is a middleware
//every piece of middleware takes 3 parameters such as req,res and next
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
