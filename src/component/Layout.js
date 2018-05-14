import React,{Component} from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from './HeaderContainer';
import ContentContainer from './ContentContainer';
import SiderContainer from './SiderContainer';
import '../style/Layout.css'
const {  Footer, Sider} = Layout;
export function _Layout() {
    return(   <Layout>
        <Header/>
        <Layout>
          <SiderContainer/>
            <ContentContainer/>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>)
}
export default _Layout