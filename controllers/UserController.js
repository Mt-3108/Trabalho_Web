const app = require('../app');
let User = require('../models/User');
const validateUser = require('./validate/login');
//const validateRegister = require('./validate/registro');


module.exports = class UserController {
    listUser = [];
    armazOk = false;

  
   
    static login(req,res){
          console.log(req.body);
          
        const {error,valid}=validateUser(req.body);
          if(valid){
              return res.status(400).json(error);
              
          }
        
          res.json({
            "token": "QpwL5tke4Pnpja7X4"
             });
    }
            
   static register(req,res){
     
        let user = new User({});
        user.email = req.body.email;
        user.password = req.body.password;

        User.findbyEmail(req.body.email).then((user)=>{
          console.log(user);
        });
        user.save();
        res.json(user);
    }

}