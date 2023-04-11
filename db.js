const { MongoClient } = require("mongodb");
const url='mongodb://localhost:27017'

const client=new MongoClient(url);

async function getConnection()
{
    let result=await client.connect();
    let db=result.db('Crud-app');
    return db.collection('Users');
    // console.log(await connection.find({}).toArray())
    // console.log('connection successful');
}

// const main=async()=>
// {
//     let data=await getConnection();
//     data=await data.find({}).toArray();
//     console.log(data);
// }

// main();

module.exports=getConnection,client;