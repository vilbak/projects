import React from 'react';
import  LoginView from "../Component/LoginView";

class LoginContainer extends React.Component {
    constructor(props){
    super(props)
    this.initialState = {
        
        email: '',
        password:'',
        formErrors: {email: '', password: ''}
    }
    this.state=this.initialState;
}



    handleChange =(e) =>{
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

       
    }
 
   
 
    handleSubmit = (e,value) => {
        e.preventDefault();
        if(this.state.password.length >= 6 && this.state.email.length>=6) {
            console.log(`E-mail: ${this.state.email}  Password: ${this.state.password}`);
            alert(JSON.stringify(this.state.email));
            alert(JSON.stringify(this.state.password));
            this.setState(
                this.initialState

            );
          
         
        } else {console.log('Password and E-mail must be 6 or more symbols')}
        
     
        
    }
 
    render() {
        const { email,password } = this.state;
        return (
            <LoginView password={password} email={email} handleChange={this.handleChange} errors={this.state.formErrors} handleSubmit={this.handleSubmit}/>
        );
    }
}
export default LoginContainer;
