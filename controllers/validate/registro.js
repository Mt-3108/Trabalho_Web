
//let db = user.db('ProjetoWeb');
module.exports = function validateRegister(user){
    listUser = [];
    let errorRegister = {};
        console.log(user);

        if(user.email==''){
            errorRegister.email =  'Seu email não deve possuir zero caracteres';
        }

        if(user.password==''){
            errorRegister.password = 'Sua senha não deve possuir zero caracteres';

        }

        if(user.email.length<3){
            errorRegister.email = 'Seu email não pode possuir menos que 3 caracteres';
        }

        if(user.password.length<3){
            errorRegister.password = 'Sua senha não deve possuir menos que 3 caracteres';
        }

        validarEmail();
        if(!validarEmail(user.email)){
            errorRegister.email = 'Seu email não foi reconhecido como um email válido';
        }

  
       return {errorRegister,validRegister:Object.keys(errorRegister).length};
}

function  validarEmail(str){
   const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);  // returns a boolean 
}

    
