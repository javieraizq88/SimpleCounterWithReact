import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

// Custom CSS
import './index.css';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

class Counter extends Component {
    constructor(props){ 
        super(props);
        this.state = {a: 0};
    }

    tick() {
        this.setState({
          a: this.state.a + 1, 
        });
      }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        ); 
    } 

    render () { 
        return (
            <div className= "row container justify-content-center contenedorGrande" >
                <div className="col reloj"><i className="far fa-clock"></i></div>
                <div className="col weeks">{parseInt(this.state.a /10000)}</div>
                <div className="col days">{parseInt(this.state.a /1000)}</div>
                <div className="col hours">{parseInt(this.state.a /100)}</div>
                <div className="col minuts">{parseInt(this.state.a /10)}</div>
                <div className="col seconds">{this.state.a % 10}</div>
            </div>
        )
    }
}



ReactDOM.render(<Counter />, document.querySelector("#root"));