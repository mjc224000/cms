import React,{Component} from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import ContentContainer from './ContentContainer'
const { Header, Footer, Sider} = Layout;
export function _Layout() {
    return(   <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <ContentContainer/>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>)
}
export default _Layout