import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import './Sidebar.css';
// import { Button, ButtonGroup } from 'reactstrap';
import { Layout,Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sidebar extends Component {

  constructor() {
    super();
    this.state = {
      logout: false,
      redirectToReferrer: false,
    };
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  componentDidMount() {
    let localData = sessionStorage.getItem('userData');
    if (localData) {
      this.setState({ logout: true });
    }

  }
  onChange(e){
    this.setState({userFeed:e.target.value});
   }
   logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
   }
  
   handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const {
      Header, Content, Footer, Sider,
    } = Layout;
    if (!this.state.logout) {
      //return (<Redirect to={'/login'}/>)
    }

    return (
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
      // <div style={{ linegeight: 30 }}>
      //   <Menu
      //     onClick={this.handleClick}
      //     selectedKeys={[this.state.current]}
      //     mode="horizontal"
      //   >
      //     <Menu.Item key="mail">
      //       <Icon type="mail" />สมาชิก
      // </Menu.Item>
      //     <Menu.Item key="app">
      //       <Icon type="appstore" />สถิติการเข้าชม
      // </Menu.Item>
      //     <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
      //       <MenuItemGroup title="Item 1">
      //         <Menu.Item key="setting:1">Option 1</Menu.Item>
      //         <Menu.Item key="setting:2">Option 2</Menu.Item>
      //       </MenuItemGroup>
      //       <MenuItemGroup title="Item 2">
      //         <Menu.Item key="setting:3">Option 3</Menu.Item>
      //         <Menu.Item key="setting:4">Option 4</Menu.Item>
      //       </MenuItemGroup>
      //     </SubMenu>
      //   </Menu>
      // </div>
    );
  }
}

export default Sidebar;

 //   <div className="secondery off-canvas position-left reveal-for-large " id="my-info" data-off-canvas data-position="left">
      //   <div className="row column">
      //   <ButtonGroup vertical>
      //     {/* <Button>1</Button>
      //     <Button>2</Button>  */}
      //   </ButtonGroup>   
      //   </div>
      // </div>