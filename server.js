var oExpress = require('express');

var appData = oExpress();

appData.listen(8091);

appData.get("/vendors",(req, resp) =>{

    resp.json(
        [
        
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
    )
   

});