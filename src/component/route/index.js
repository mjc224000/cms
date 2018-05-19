import React,{Component} from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Content from '../ContentContainer';
import SiderContainer from '../SiderContainer';

import Login from '../pages/login';
const Middle=function () {
    return (<Layout>
        <SiderContainer/>
      <Content></Content>

    </Layout> )
}
export default function () {
    return( <div>
        <Route path={'/'} component={Middle} />
        <Route path={'/pages/login'} component={Login}/>
    </div>     )
}