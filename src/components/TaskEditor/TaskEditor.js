import React,{Component} from 'react'
import styled from 'styled-components'


const Form=styled.form `
display:flex;
flex-wrap:wrap;
max-width:400px;
margin: 0 auto 30px;
`
const InputForm=styled.input `
height:30px ;
width:100%;
margin-bottom:20px;
border-radius:0.5rem;
`

const FormButton=styled.button `
width: 50%;
height: 50px;
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
background-color:blue;
cursor:pointer;
outline:none;
border-radius:0.5rem;
border:none;
`

export default class TaskEditor extends Component{
    
    state={
        inputValue:''
    }
    

 handlerInput=(e)=>{
     this.setState({
         inputValue:e.target.value,
     })
 }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.inputValue){
        this.props.onAddTask(this.state.inputValue)
        this.setState({
            inputValue:''
        })
    }
    }
    
    render(){ 
    return(
        <div>
          <Form onSubmit={this.handleSubmit}>
              
                  
                  <InputForm type="text" placeholder="введите текст" value={this.state.inputValue} onChange={this.handlerInput}></InputForm>
            
              <FormButton type='submit'>add text</FormButton>
          </Form>
        </div>
    )
    }
}