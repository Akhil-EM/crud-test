var express = require('express');
var router = express.Router();
var {addUser,editUser}=require('../util/sql-query');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add-user', { title: 'Express' });
});

router.post('/add',(req,res)=>{
  var name=req.body.name;
  var address=req.body.address;
  var age=req.body.age;
  var phone=req.body.phone;
  addUser(name,address,age,phone)
         .then((msg)=>{
           console.log(msg)
           res.redirect('/')
         }).catch((error)=>{
           console.log(error);
           res.send(error)
         });
  
});

router.post('/edit',(req,res)=>{
  var rollNo=req.body.rollNo;
  var name=req.body.name;
  var address=req.body.address;
  var age=req.body.age
  var phone=req.body.phone;
  res.render('edit-user', {status:'error',data:{rollNo:rollNo,name:name,address:address,age:age,phone:phone},title:'student list'});
})

router.post('/edit-user',(req,res)=>{
  var rollNo=req.body.rollNo;
  var name=req.body.name;
  var address=req.body.address;
  var age=req.body.age
  var phone=req.body.phone;
  editUser(rollNo,name,address,age,phone)
        .then(()=>{
               res.redirect('/')
        }).catch((error)=>{
          console.log(error)
        })


})




module.exports = router;
