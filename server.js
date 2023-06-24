var oExpress = require('express');

var appData = oExpress();
const crypto = require("crypto");
appData.listen(8092);

appData.use(oExpress.json());
// MidlleWare data

appData.use("/",oExpress.static("webapp/"))

this.empData =   [
        
    {
        "id" : 1,
        "firstName" : "Shubham",
        "lastName" : "Bankar",
        "gender" : "Male",
        "age" : 29,
        "company" : "HCL",
        "designation" : "Software Developer"
    },
    {
        "id" : 2,
        "firstName" : "Durgesh",
        "lastName" : "Jaiswal",
        "gender" : "Male",
        "age" : 28,
        "company" : "SAP",
        "designation" : "Software Developer"
    },
    {
        "id" : 3,
        "firstName" : "Agnel",
        "lastName" : "Jaman",
        "gender" : "Male",
        "age" : 31,
        "company" : "Woulter Klewer",
        "designation" : "CyberSecurity Developer"
    }

    ]

appData.get("/vendors",(req, resp) =>{

    resp.json(this.empData )

});


appData.get("/vendors/:id", (req, respo)=>{

        var foundVendor = this.empData.find(element => {
            return element.id = req.params.id;
        })

        typeof(foundVendor) !== undefined ? respo.send(foundVendor) : respo.send({
            "message" : "something wrong !!"
        })
    
});

// Posting data 

appData.post("/vendors",(req, resp) =>{

    var postVendorData = req.body;

    const testId = crypto.randomBytes(16).toString("hex");
      postVendorData.id = testId
    resp.json(postVendorData);

});

// Fiori app

appData.get("/index.html", (req, resp) =>{

        resp.sendFile(__dirname + "/webapp/index.html")
})
