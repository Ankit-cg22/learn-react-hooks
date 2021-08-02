import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Info from './info'
import EffectUse123 from './UseEffect'
import UseEffectComplex from './UseEffectComplex'
import MemoUse from './MemoUse'
import RefUse from './RefUse'
import RefUse2 from './Refuse2'
import ContextUse from './ContextUse'
import LoginContext from './ContextUseUserLogIn'
import CallbackUse from './CallbackUse'
import Custom from './Custom'

ReactDOM.render(
  <React.StrictMode>
     <Custom/>
  </React.StrictMode>  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
