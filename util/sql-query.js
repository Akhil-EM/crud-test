var msSql=require("mssql");
var {serverConnect}=require('./db-connection');
var request=new msSql.Request();
module.exports={
    listUsers:(_studentName)=>{
        return new Promise((resolve,reject)=>{
                    serverConnect().then((ConObj)=>{
                        query_string=`exec spSelectStudent @name ='${_studentName}'`;
                        try{
                            var request=new ConObj.Request();
                            request.query(query_string,async (_err,_data)=>{
                                if(_err){
                                    reject(_err)
                                }
                                resolve(_data.recordsets[0]);
                            })
                          }catch(_err){
                             reject(_err)
                          }
                    }).catch((err)=>{
                        reject(err);
                    })       
        })
    },
    deleteUser:(_id)=>{
        return new Promise((resolve,reject)=>{
            serverConnect().then((ConObj)=>{
                query_string=`exec  spDeleteStudent @rollno =${_id}`;
                try{
                    var request=new ConObj.Request();
                    request.query(query_string,async (_err,_data)=>{
                        if(_err){
                            reject(_err)
                        }
                        resolve('user deleted');
                    })
                  }catch(_err){
                     reject(_err)
                  }
            }).catch((err)=>{
                reject(err);
            })       
        })
    },
    addUser:(_name,_address,_age,_phone)=>{
        return new Promise((resolve,reject)=>{
            console.log(_name,_address,_age,_phone,"query");
            serverConnect().then((ConObj)=>{
               //
                query_string=`exec  spInsertstudent @NAME ='${_name}' , @ADDRESS='${_address}' ,
                                    @AGE=${_age},@PHONENO=${_phone}`;
                try{
                    var request=new ConObj.Request();
                    request.query(query_string,async (_err,_data)=>{
                        if(_err){
                            reject(_err)
                        }
                        resolve('new user created');
                    })
                  }catch(_err){
                     reject(_err)
                  }
            }).catch((err)=>{
                reject(err);
            })       
        })
    },
    editUser:(_rollNo,_name,_address,_age,_phone)=>{
        return new Promise((resolve,reject)=>{
            console.log(_rollNo,_name,_address,_age,_phone);
            serverConnect().then((ConObj)=>{
                query_string=`exec  spEditstudent @NAME ='${_name}' , @address='${_address}',
                                        @age=${_age},@PHONENO=${parseInt(_phone)} ,@rolLno=${parseInt(_rollNo)}`;
                try{
                    var request=new ConObj.Request();
                    request.query(query_string,async (_err,_data)=>{
                        if(_err){
                            reject(_err)
                        }
                        resolve('user updated');
                    })
                  }catch(_err){
                     reject(_err)
                  }
            }).catch((err)=>{
                reject(err);
            })     

        })
    }
    
}
