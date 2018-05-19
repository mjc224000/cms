import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import { Layout,Menu,Icon } from 'antd';
import '../style/SiderContainer.less'
const {Sider}=Layout;
const SubMenu=Menu.SubMenu;

class _Sider extends Component{
    constructor(){
        super();
        this.state={collapsed:false}
    }
    componentWillMount(){
        this.setState({})
    }
    render(){
        return( <Sider width={200}>
                <Menu
                    theme="dark"
                      mode={'inline'}
                    defaultSelectedKeys={['2']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                        <Menu.Item key="1"><Link to={'/FormNormal'}>FormNormal</Link></Menu.Item>
                        <Menu.Item key="2"><Link to={'/FormRegistration'}>FormRegistration</Link></Menu.Item>
                        <Menu.Item key="3"><Link to={'/Other'}>other</Link></Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />table</span>}>
                        <Menu.Item key="5"><Link to={'/asyncTable'}> AsyncTable </Link></Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />Carousel</span>}>
                        <Menu.Item key="9"><Link to={'/D3Carousel'}> D3Carousel</Link></Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />Pages</span>}>
                        <Menu.Item key={13}><Link to={'./Pages/Login'}>LoginPage </Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}
export default _Sider