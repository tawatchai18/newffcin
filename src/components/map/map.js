import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import './map.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Table, Button, Popconfirm } from 'antd';
import { Line, Pie } from 'react-chartjs-2';

const { Header, Content, Footer, Sider, } = Layout;
const SubMenu = Menu.SubMenu;

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'My First dataset',
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: 'rgba(75,192,192,1)',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//             pointHoverBorderColor: 'rgba(220,220,220,1)',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [65, 59, 80, 81, 56, 55, 40]
//         }
//     ]
// };

const da = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class Map extends Component {
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
                <Layout style={{ marginTop: 3 }}>
                    <Sider style={{ background: '#fff' }} >
                        <div className="logo" />
                        <Menu defaultSelectedKeys={['1']} mode="inline">
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
                            {/* <Line data={data} /> */}
                            <Pie data={da} />
                        </div>
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
        </Footer>
            </Layout>
        );
    }

}

export default Map;

