var express = require('express');

var app  = express();
app.listen(8090);

app.get("/", (req , resp)=>{

    resp.send("Hello Mr Shabby3");


});

app.get("/vendor", (req ,resp)=>{
   resp.json({
    "employees" : [
        {
            "empId" : 100,
            "firstName" :"Shubham",
            "lastName" : "Bankar",
            "salary" :5000,
            'Age' : 29

        },
        {
            "empId" : 101,
            "firstName" :"Durgesh",
            "lastName" : "Jaiswal",
            "salary" :1000,
            'Age' : 28

        }
    ],
    "cites" :[
        {
            "city" : 'Pune',
            "State" : 'Maharashtra'
        },
        {
            "city" : 'Bangalore',
            "State" : 'karnataka'
        }
    ],
    "gender" : {
        'M' : 'Male',
        'F' : 'Femal'
    }

});
})
