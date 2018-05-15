import React,{Component} from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import '../style/ContentContainer.css'
const {Content} =Layout;
const a=()=><div>aa</div>
export default  class _Content extends Component{
    render(){
        return( <Content>
            <Route path="/a" component={a}>

            </Route>
        </Content>)
    }
}