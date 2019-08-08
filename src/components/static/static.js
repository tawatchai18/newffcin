import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './map.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Card, Icon, Tabs, Button } from 'antd';
import { Pie, Line } from 'react-chartjs-2';

const { Header, Content, Footer, Sider, } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const da = {
    labels: [
        'Red',
        'Green',
        'Yellow',
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
        const CheckButtons = ({ LinkForm, Form }) => {
            if (Form) {
                if (Form === 'Application') {
                    return (
                        <Button icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getFundConnextForm.pdf"} style={{ color: '#000' }}> สถิติการรักษา</a>
                        </Button>
                    )
                } else if (Form === 'Fatca') {
                    return (
                        <Button icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getFactaForm.pdf"} style={{ color: '#000' }}> สถิติการรักษา</a>
                        </Button>
                    )
                } else if (Form === 'Suitability') {
                    return (
                        <Button icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getSuitabilityForm.pdf"} style={{ color: '#000' }}> สถิติการรักษา</a>
                        </Button>
                    )
                } else if (Form === 'ID Card') {
                    return (
                        <Button icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getIDCardForm.pdf"} style={{ color: '#000' }}> สถิติการรักษา</a>
                        </Button>
                    )
                }
            } else {
                if (Form === 'Application') {
                    return (
                        <Button disabled icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getFundConnextForm.pdf"} style={{ color: '#b4b4b4' }}> สถิติการรักษา</a>
                        </Button>
                    )
                } else if (Form === 'Fatca') {
                    return (
                        <Button disabled icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getFactaForm.pdf"} style={{ color: '#b4b4b4' }}> สถิติการรักษา</a>
                        </Button>
                    )
                } else if (Form === 'Suitability') {
                    return (
                        <Button disabled icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getSuitabilityForm.pdf"} style={{ color: '#b4b4b4' }}> สถิติการรักษา</a>
                        </Button>
                    )
                } else if (Form === 'ID Card') {
                    return (
                        <Button disabled icon="download" style={{ margin: '10px' }}>
                            <a href={LinkForm} download={"getIDCardForm.pdf"} style={{ color: '#b4b4b4' }}>สถิติการรักษา</a>
                        </Button>
                    )
                }
            }
        }
        return (
            <Layout style={{ fontFamily: 'Kanit' }}>
                <Header style={{ backgroundColor: '#46bd93', height: 100 }}>
                    <img style={{ height: 80, width: 100 }} src="LOGO_White.png"></img>
                    <a href="/login" onClick={this.logout} className="logout">ออกจากระบบ</a>
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
                                <Link to="/static">สถิติการใช้งาน</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="bar-chart" />
                                <span>รายงาน</span>
                                <Link to="/export">รายงาน</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="แผนภูมิประชากร" key="1">
                                    <Pie data={da} />
                                </TabPane>
                                <TabPane tab="สถิติ" key="2"> <Line data={data} /></TabPane>
                                {/* <TabPane tab="Link " key="3">Content of Tab Pane 3</TabPane> */}
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

export default Map;

