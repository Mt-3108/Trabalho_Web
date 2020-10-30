import React from 'react';
import axios  from 'axios';


export default class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {mensagem:'',
            name:'', age:''}
        
    }

      
    onChange(event){
        this.setState({[event.target.name]:event.target.value})
       
    }

    submit(){

      const name = this.state.name;
      const age = this.state.age;
  
        if(this.validate()){
            axios.post('/publication/save',{name, age}).then((resposta)=>{
                console.log(resposta)
                if(resposta){
                    this.setState({mensagem:'Nome inserido com sucesso'})
                }

              });
        }
      
    }

    validate(){
        

        if(this.state.name.length<3){
            this.setState({mensagem:'O nome não deve possuir menos de três caracteres.'})
            return false;
        }
        return true;
    }

        
    render(){
            return(
                <div>
                    <h1>Criação de conteúdo:</h1>
                    <p className='nomeDesejado'>Digite o nome:</p>
                    <input className ='enviarNome' type='text' name='name' onChange={this.onChange.bind(this)}></input>
                    <p className='nomeDesejado'>Digite a idade:</p>
                    <input className ='enviarNome' type='text' name='age' onChange={this.onChange.bind(this)}></input>
                  <div className='btEnviar'>
                     <button onClick={this.submit.bind(this)}>
                        Gravar
                    </button>
                  </div>
                   
                    <h1>
                        {this.state.data}
                    </h1>

                    <span >
                        {this.state.mensagem}
                    </span>
                </div>
            );
    }
}