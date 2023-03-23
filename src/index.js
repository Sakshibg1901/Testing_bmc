import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Smtp code

// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const submit = document.getElementById('submit');

// submit.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let ebody = `
//     <h1>First Name: </h1>${fname.value}
//     <br>
//     <h1>Last Name: </h1>${lname.value}
//     `;

//     Email.send({
//         SecureToken : "your-token", //add your token here
//         To : 'them@website.com', 
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : ebody
//     }).then(
//       message => alert(message)
//     );
// });









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
