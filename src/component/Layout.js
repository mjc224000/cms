import React,{Component} from 'react'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import ContentConstomer from './ContentConstomer'
const { Header, Footer, Sider} = Layout;
export function _Layout() {
    return(   <Layout>
        <Header>Header</Header>
        <Layout>
            <ContentConstomer>Content</ContentConstomer>
            <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>)
}
export default _Layout