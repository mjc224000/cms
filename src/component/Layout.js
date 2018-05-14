import { Layout } from 'antd';
import 'antd/dist/antd.css'
const { Header, Footer, Sider, Content } = Layout;
export function Layout() {
    return(   <Layout>
        <Header>Header</Header>
        <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>)
}
export default Layout