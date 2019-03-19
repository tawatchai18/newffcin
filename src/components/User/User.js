import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './User.css';
import { Data, CreatData } from '../../services/PostData';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Card, Col, Row, Input } from 'antd';
import '../../styles/react-confirm-alert.css';

const { Header, Content, Footer, Sider, } = Layout;
const SubMenu = Menu.SubMenu;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      collapsed: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logout = this.logout.bind(this);
    console.log(this.state.items, 'jgholjksmlkdgh');

  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  getUrl = () => {
    const user = localStorage.getItem('userUnit')
    return JSON.parse(user)
  }

  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }

  logout() {
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }

    const data = this.state.items
    console.log(data);
    return (
      <Layout>
        <Header style={{ background: '#fff', height: 80 }}>
          Family Folder Collector | (FFC)
         <a href="/login" onClick={this.logout} className="logout">Logout</a>
        </Header>
        <Layout style={{ marginTop: 3 }}>
          <Sider style={{ background: '#fff' }}>
            <div className="logo" />
            <Menu mode="inline" >
              <Menu.Item key="1">
                <Icon type="user" />
                <span>ผู้ใช้งาน</span>
                <Link to="/home">ผู้ใช้งาน</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>แผนที่</span>
                <Link to="/map">แผนที่</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="bar-chart" />
                <span>สถิติการใช้งาน</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span>รายงาน</span>
                <Link to="/export">รายงาน</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                  <Col span={16}>
                    <Card title="ข้อมูลส่วนบุคคล" bordered={false}>
                      <p>name : {this.getUrl().name}</p>
                      <p>ORG : {this.getUrl().role}</p>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by  Nectec
        </Footer>
      </Layout>
    );
  }
}
export default User;


