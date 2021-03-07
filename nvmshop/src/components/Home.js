import React, { Component } from 'react';
import logo from './image/homepage.jpg' ;
class Home extends Component {
    state = {}
    render() {
        return (
            <div class="container">
                <div class="col my-5">
            <div class="jumbotron">
                <h1 class="display-4">NVM SHOP</h1>
                <p class="lead">Tumhari Dukan.</p>
                <hr class="my-4"/>
                    <p>Mast raho masti me aag lage basti me.</p>
                    <p class="lead">
                        <a class="btn btn-info btn-lg" href="#" role="button">About</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a class="btn btn-warning btn-lg" href="#" role="button">Login / Signup</a>
                    </p>
                    <img src={logo} alt="logo" />
                    </div>
                    </div>
                    </div>
                    
                    );
                    
                    }
                    
                    }


export default Home;