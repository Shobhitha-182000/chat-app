const express=require('express');
const chat=express();
const bodyParser=require('body-parser');
//to get body
chat.use(bodyParser.urlencoded({extended:false}));

const userExport=require('./user/user');
const messageExport=require('./user/message');
chat.use('/user',userExport);
chat.use('/user',messageExport);

 chat.use((req,res,next)=>{
    console.log("Printed");
    res.send('<h1>User page</h1>')
 })

chat.listen(8080,()=>{
    console.log("8080 port started...!!")
})