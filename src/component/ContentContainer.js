import React,{Component} from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import '../style/ContentContainer.css'
import FormNormalLogin from './form/FormNormal';
import FormRejistration from './form/FormRegistration';
import Other from './form/other'
const {Content} =Layout;
export default  class _Content extends Component{
    render(){
        return( <Content>
            <Route path="/FormNormal" component={FormNormalLogin}/>
            <Route path={"/FormRegistration"} component={FormRejistration}/>
            <Route path={"/Other"} component={Other}/>
        </Content>)
    }
}