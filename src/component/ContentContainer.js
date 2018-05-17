import React,{Component} from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import '../style/ContentContainer.css'
import FormNormalLogin from './form/FormNormal';
import FormRegistration from './form/FormRegistration';
import Other from './form/other'
import AsyncTable from './table/AsynchronousTable';
import D3Carousel from './carousel/D3Carousel';
const {Content} =Layout;
export default  class _Content extends Component{
    render(){
        return( <Content>
            <Route path="/FormNormal" component={FormNormalLogin}/>
            <Route path={"/FormRegistration"} component={FormRegistration}/>
            <Route path={"/Other"} component={Other}/>
            <Route path={"/asyncTable"} component={AsyncTable}/>
            <Route path={'/D3Carousel'} component={D3Carousel}/>
        </Content>)
    }
}