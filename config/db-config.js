// require("dotenv").config()
module.exports = {
   sqlServer:{
        user:'ituser',
        password:'ituser@321',
        server:'wpr.intertoons.net', 
        database:'AsaadecomDbCopy',
        options: {
        encrypt: true, // for azure
        trustServerCertificate:true}},
};