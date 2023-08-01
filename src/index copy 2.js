import React from 'react';

import ReactDOM from 'react-dom/client';
//import './index.css';
import './ncom.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

/*
function Welcome(props){
  return <h1> Hello, dasd ist eine test {props.name} </h1>;
}
*/

/*
const element = <Welcome name="Sara" />;
*/
/*
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state ={Date: new Date()};
  }

  componentDidCatch(){
    this.ticker
  }
  render(){
    return(
      <div>  
        <h1> Aktuelle Uhrzeit : {new Date().toLocaleTimeString()}</h1>
      </div>
    );
  }
}
*/
/*
ReactDOM.render(
  <Clock/>,
  element,
  document.getElementById('root'));

*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

