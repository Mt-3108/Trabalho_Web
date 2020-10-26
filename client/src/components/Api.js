import React from 'react';
import axios  from 'axios';


export default class Api extends React.Component{
    constructor(props){
        super(props);
        this.state = {mensagem:'',
            name:'',data: ''}
        
    }

      
    onChange(event){
        this.setState({[event.target.name]:event.target.value})
       
    }

    submit(){
  
        if(this.validate()){
            axios.get('https://api.agify.io?name='+this.state.name).then((resposta)=>{
                if(resposta){
                    this.setState({data: resposta.data.age,mensagem:'Pesquisa Feita com Sucesso'})

                  
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
                    <p className='nomeDesejado'>Digite o nome desejado:</p>
                    <input className ='enviarNome' type='text' name='name' onChange={this.onChange.bind(this)}></input>
                  <div className='btEnviar'>
                     <button onClick={this.submit.bind(this)}>
                        Enviar
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