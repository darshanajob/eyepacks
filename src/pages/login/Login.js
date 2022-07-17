import React from 'react';
import {ReactComponent as Logo} from '../../assets/user.svg';
import Swal from 'sweetalert2'
import './Login.css';

class Login extends React.Component{
    state={
        username:'',
        password:'',
    }
    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.username==='admin' && this.state.password==='admin'){
            this.props.isLogin(true);
        }else{
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter correct username & password !!',
               
              })
        } 
    }

    render(){
        return(
            <div className='div-logo'>
                <div className='div-login-logo'>
                    <Logo/>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' name='username' placeholder='Type your username' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='Type your password' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;