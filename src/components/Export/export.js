import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import './map.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Tabs, } from 'antd';

const { Header, Content, Footer, Sider, } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            collapsed: false,
        };
        this.onChange = this.onChange.bind(this);
        this.logout = this.logout.bind(this);
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
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

        return (
            <Layout>
                <Header style={{ background: '#fff', height: 80 }}>
                    Family Folder Collector | (FFC)
         <a href="/login" onClick={this.logout} className="logout">Logout</a>
                </Header>
                <Layout style={{ marginTop: 2 }}>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="export pdf" key="1"></TabPane>
                                <TabPane tab="DownLoad pdf" key="2">Content of Tab Pane 2</TabPane>
                                <TabPane tab="Link " key="3">Content of Tab Pane 3</TabPane>
                            </Tabs>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }

}

export default Export;

