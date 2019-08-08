import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import './map.css';
import 'antd/dist/antd.css';
import { Layout, Tabs, } from 'antd';
// import { Layout, Menu, Tabs, } from 'antd';
const { Header, Content, Footer } = Layout;
// const SubMenu = Menu.SubMenu;
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
            <Layout style={{fontFamily: 'Kanit'}}>
                <Header style={{ backgroundColor: '#46bd93', height: 100 }}>
                    <img style={{ height: 80, width: 100 }} src="LOGO_White.png"></img>
                    <a href="/login" onClick={this.logout} className="logout">ออกจากระบบ</a>
                </Header>
                <Layout style={{ marginTop: 2, backgroundColor: '#fff' }}>
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
                <Footer style={{ backgroundColor: '#46bd93' }}>
                    <center>
                        <img style={{ height: 40, width: 100 }} src="nstda.png"></img>
                        <p style={{ fontSize: 16, color: '#fff', marginTop: 10 }}>สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
                    </center>
                </Footer>
            </Layout>
        );
    }
}

export default Export;

