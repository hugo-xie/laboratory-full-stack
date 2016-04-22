'use strict';
let connect = {};

const AV = require("leanengine");
 var Introduce = AV.Object.extend('Introduce');

 connect.add = (req,res) =>{
  var introduce = new Introduce();
   introduce.set("name",req.body.name);
   introduce.set("age",req.body.age);
   introduce.set("phonenumber",req.body.phonenumber);
   introduce.set("email",req.body.email);
   introduce.set("school",req.body.school);
   introduce.set("comment",req.body.comment);
   introduce.save().then(function(newIntroduce){
       console.log("新的联系联系已经建立"+newIntroduce.id);
   },function(err){
        console.log("添加失败"+err.message);
   });
 };
 module.exports=connect;