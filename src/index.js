import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'


// class App extends React.Component{
//   render(){
//     return (
//       <div className='App'>
//         <h1>Hello World!</h1>
//       </div>
//     )
//   }

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

