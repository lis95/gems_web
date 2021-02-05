import React, { Component } from 'react';
import Footer from '../components/Footer'
import '../css/t-board_estilos.css'
import Header_tboard from '../components/Header_tboard';

export default class T_board extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Header_tboard />
                <div className="container-fluid mb-3">
                    <div className="row mx-1" >
                        <nav className="col-2 col-md-2 col-sm-2  bg-dark sidebar altoCompleto mx-0 p-1">
                            <div className="sidebar-sticky sideBar text-center" >
                                <ul className="nav flex-column text-left">
                                
                                <li className="nav-item"><a href="" className="nav-link text-white">Projects</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-white">Master Projects</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-white">Support Projects</a></li>
                               
                                </ul>
                                 <button className="btn btn-primary mt-3">New Project</button>
                            </div>
                        </nav>
                        <div className="col-10 altoCompleto">
                            <div className="jumbotron p-2 mb-0">
                                <div className="container mb-1">
                                    <div className="row">
                                        <div className="col-3"></div>
                                            <div className="col-6">
                                                <input className="form-control mr-sm-2" type="text" placeholder="Search projects"></input>
                                            </div>
                                        <div className="col-3"></div>
                                        
                                    </div>
                                    
                                </div>
                                <ul className="list-group mx-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 13
                                        <span className="badge badge-secondary">New</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 13
                                        <span className="badge badge-secondary">New</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 12
                                        <span className="badge badge-secondary">New</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 11
                                        <span className="badge badge-secondary">New</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 10 
                                        <span className="badge badge-secondary">New</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 9
                                        <span className="badge badge-secondary">New</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 8
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 7
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 5
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 4
                                        
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 3
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 2
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 1
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Project 0
                                    </li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

 
