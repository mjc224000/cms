import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
const aa=()=>{
  return  (<div> aa</div>)
}
const Parent = () => (
    <div>
        <Route path='other' component={aa} />
    </div>
)
const Index=()=>{
  return  (<Router >
          <Route path={'/'} component={App}>
          </Route>



    </Router>  )
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
