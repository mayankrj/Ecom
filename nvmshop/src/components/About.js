import React, { Component } from 'react';
import logo from './image/homepage.jpg' ;
import logo1 from './image/shop1.jpeg' ;
class About extends Component {
    state = {}
    render() {
        return (

            <div class="container">
                <div class="col my-5">
                    <h1>about us</h1>
                    <br/>
                    <div class="card" style={{width : '18rem'}}>
                        <img class="card-img-top" src={logo} alt="Card image cap" />  
                    <div class="card-body">
                        <p class="card-text">Phla Blog.</p>
                    </div>
                </div>    
                
                
                <br/>
                <div class="card" style={{width : '18rem'}}>
                        <img class="card-img-top" src={logo} alt="Card image cap" />  
                    <div class="card-body">
                        <p class="card-text">Phla Blog.</p>
                    </div>
                </div>
                <br/>
                <div class="card" style={{width : '18rem'}}>
                        <img class="card-img-top" src={logo} alt="Card image cap" />  
                    <div class="card-body">
                        <p class="card-text">Phla Blog.</p>
                    </div>
                </div>
                <br/>
            </div>
                </div >
          );
    }
}

export default About;