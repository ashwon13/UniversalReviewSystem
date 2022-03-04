require("dotenv").config();
const express = require("express"); // importing express
const morgan=require("morgan");//Importing morgan for middle ware
const app = express();// creating an instance of and express app
const db=require("./db");


app.use(express.json());



// Get all Restaurants

app.get("/api/v1/restaurants",async(req, res) =>{//server running on local host and when you want to get restuarnts front end would lead to https://localhost:some port number/getRestaurant
    try{
        const results=await db.query("select * from restaurants")
    console.log(results);
    res.status(200).json({//sends in json format
        status: "success",
        results:results.rows.length,//sends these things
        data:{
            restaurants: results.rows,
        },//sends these things
    });
    }
    catch(err){
        console.log(err);
    }
     


});//which will lead to this chunk of code
//Get individual resturant

app.get("/api/v1/restaurants/:id",(req,res)=>{
    console.log(req.params);
    res.status(200).json({
        status:"success",
        data:{
            restaurant:"mcdonalds"
        },
    });
});
// creating a new restuarant
app.post("/api/v1/restaurants", (req, res)=>{
    
    console.log(req.body);
    res.status(201).json({
        status:"success",
        data:{
            restaurant:"mcdonalds"
        },
    });
});

// updating restuarant
app.put("/api/v1/restaurants/:id", (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status:"success",
        data:{
            restaurant:"mcdonalds"
        },
    });

});

//deleting a resturant

app.delete("/api/v1/restaurants/:id",(req,res)=>{
    res.status(204).json({
        status: "success"
    });

});

console.log("test");
const port=process.env.port || 3001; //setting up port var from .env file or setting default port of 3001
app.listen(port,() =>{//sets port and sets what the server does when on
    console.log(`server is up and listening on port ${port}`);//uses template string and uses port variable
});
