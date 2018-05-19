import React,{Component} from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from './HeaderContainer';
/*import ContentContainer from './ContentContainer';
import SiderContainer from './SiderContainer';*/
import Route from './route'
import '../style/Layout.css'
const {  Footer, Sider} = Layout;
export function _Layout() {
    return(   <Layout>
        <Header/>

          <Route/>

        <Footer>Footer</Footer>
    </Layout>)
}
export default _Layout