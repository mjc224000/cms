import React,{Component} from 'react'
import { Layout,Menu,Icon,Button ,Dropdown,Avatar,Badge} from 'antd';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
const {Header}=Layout;
const SubMenu=Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const _Menu=(    <Menu
    onClick={this.handleClick}
    style={{ width: 256 }}
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}

    >
    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
        <MenuItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
        </MenuItemGroup>
    </SubMenu>
    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
</Menu>)
class HeaderContainer extends Component{
    constructor(props){
        super(props);
        this.state={fold:true}
    }
    toggle(){
        this.setState({fold:!this.state.fold })
    }
    render(){
        return(<Header>
            <div style={{ width: 256 ,float:'right',transform:'translateZ(1px)'}}>
                <Dropdown overlay={_Menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#" onClick={this.toggle.bind(this)}>
                        <Icon  type={this.state.fold ? 'menu-unfold' : 'menu-fold'} />
                    </a>
                </Dropdown>
                <span style={{ marginLeft: 24 }}>
                    <Link to={'/'} >   <Badge count={0}><Avatar shape="square" icon="user" /></Badge></Link>
    </span>
            </div>

        </Header>)
    }
}
export default HeaderContainer