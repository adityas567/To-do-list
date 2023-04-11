const express=require('express');
const app=express();
const port=2023;

const dbCon=require('./db.js')

app.set("view engine","ejs");


//rendering out static files
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))


// app.get('/',(req,res)=>{
//     res.render('index',{title:"user"});
// });

const userRouts=require('./routes/users');

app.use('/users',userRouts);

function logger(req,res,next)
{
    console.log(req.originalUrl)
    next();
}

const insert=async()=>
{
    let con=await dbCon();
    // let result=await con.insertOne({name:"aditya"});

    // console.log(result);
}

insert();


app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})




