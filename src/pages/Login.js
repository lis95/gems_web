import React, { Component } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import Navegacion from '../components/navbar/Nav';
import Footer from '../components/footer/Footer'; 
import '.././styles/login.css';


//dentro de esta variable va la url a la base datos
const peticionUsuario = ""

export default class Login extends Component {

    state= {
        form:{
            email:"",
            password:""
        }
    }
    
    handledChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

        console.log(this.state.form)

    }

    iniciarSesion = async() => {
        await axios.get(peticionUsuario,{params:{email: this.state.form.email,password:this.state.form.password}})
        .then(console.log(""))
        .catch(console.log(""))

    }

    render(){
        return(
        <div className="app">
            <Navegacion/> 
            <div className="card mx-5 my-5" id="content">
            <div className="card-body">
                <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                    <form className="formLogin">
                        <h3 className="text-center login">Sing in to T-Board</h3>
                        <div className="form-group">
                        <label htmlFor="email" className="login">email:</label>
                        <input type="text" name="email" id="email" className="form-control login" onChange={this.handledChange}></input>
                        </div>
                        <div className="form-group">
                        <label htmlFor="password" className="login">Password:</label>
                        <input type="text" name="password" id="password" className="form-control" onChange={this.handledChange}></input>
                        </div> 
                        <div className="form-group">
                        <button className="btn btn-info btn-m" id="submit" value="submit" onClick={()=> this.iniciarSesion()}> submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}