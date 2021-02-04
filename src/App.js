import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render(){
    return(
      <div className="app">
        <div className="card mx-5 my-5">
          <div className="card-body">
            <div id="login-row" class="row justify-content-center align-items-center">
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form>
                    <h3 class="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label for="Email" class="text-info">Email:</label>
                      <input type="text" name="Email" id="Email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label for="password" class="text-info">Password:</label>
                      <input type="text" name="password" id="password" className="form-control"></input>
                    </div> 
                    <div class="form-group">
                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"></input>
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