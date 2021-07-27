var msSql=require("mssql");
var config=require("../config/db-config").sqlServer;
module.exports={
    serverConnect:()=>{
        return new Promise((resolve,reject)=>{
            var conStatus;
            try{
         
                msSql.connect(config,(_err)=>{
                    if(_err) reject(_err);
                    else resolve(msSql);      
                });
            }catch(err){
                console.timeLog(err)
                reject(false);      
            }

            
        })
    }
}
