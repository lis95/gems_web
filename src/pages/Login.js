import React, { Component } from 'react';
import axios from 'axios'
import Header from '../components/Header'
import ReactDOM from 'react-dom';
import '../css/login_estilos.css'

//dentro de esta variable va la url a la base datos
const peticionUsuario = "localhost/:4000"

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
        .then(console.log("hola dios soy yo de nuevo"))
        .catch(console.log("hola dios soy yo de nuevo2"))

    }

    render(){
        return(
        <div className="app">
            <Header />
            <div className="card mx-auto my-5 loginCard">
                <div className="card-body ">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-12">
                            <div id="login-box" className="col-md-12">
                                <form>
                                    <h3 className="text-center mb-5">Sing-in to T-board</h3>
                                    <div className="form-group">
                                        <label htmlFor="email" className="">Email:</label>
                                        <input type="text" name="email" id="email" placeholder='Ejemplo123@gmail.com' className="form-control" onChange={this.handledChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="">Password:</label>
                                        <input type="password" name="password" id="password" placeholder='***************' className="form-control" onChange={this.handledChange}></input>
                                    </div> 
                                    <div className="form-group text-center mt-4">
                                        <a className="btn btn-outline-primary btn-lg btn-block" value="submit" onClick={()=> this.iniciarSesion()}>Submit</a>
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