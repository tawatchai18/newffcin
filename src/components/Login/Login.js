import React, { Component, Suspense } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PostData, Data } from '../../services/PostData';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Login.css';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, Card, CardBody, CardGroup, Col, Container, Row, CardTitle, CardText, CardHeader } from 'reactstrap';

// var chk = true;
var temp = null;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '', // เพิ่ม state id
      username: '',
      password: '',
      redirectToReferrer: false,
      multiple: false,
      loading: false
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  createTable = () => {
    let table = []
    if (!temp || temp === null) {
      Data().then((result) => {
        temp = result
        temp.forEach(element => {
          table.push(<option value={element.id}>{element.name}</option>)
        });
        this.setState({ loading: true });
        return table;
      });
    } else {
      temp.forEach(element => {
        table.push(<option value={element.id}>{element.name}</option>)
      });

      return table;
    }
  }

  handleValidSubmit() {
    if (this.state) {
      // ดึงตัวแปรออกมาจาก state ให้ใช้ง่ายๆ
      const { id, username, password } = this.state;

      // ส่งตัวแปรเข้า PostData น่าจะใช้แค่ username กับ password ปะ???
      PostData('handleValidSubmit', { username, password }, id).then((result) => {
        let responseJson = result;
        console.log(responseJson, 'wwww')
        if (responseJson.user) {
          localStorage.setItem('userdata', JSON.stringify(responseJson))
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        } else if (result.code === 401) {
          alert('not connect', result.code)
        }
      })
    }
  }

  onChange(e) {
    const idOption = e.target.value
    this.setState({ [e.target.name]: e.target.value });
    Data()
      .then((d) => {
        let data = ''
        d.filter((dd) => dd.id === idOption ? data = dd.name : {})
        localStorage.setItem('idOpn', data)
      })
  };

  render() {
    const loading = this.state.loading
    const { multiple } = this.state;
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'} />)
    }

    if (sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'} />)
    }
    return (
      <div className="off-canvas-wrapper">
        <Header />
        <div className="app flex-row align-items-center" style={{ marginTop: 80, fontSize: 18 }}>
          <Container>
            <div>
              <Row className="justify-content-center">
                <Col span={12}>
                  <div>
                    <img style={{ height: 300, width: 200 }} src="FFC.png"></img>
                    <img style={{ height: 300, width: 200 }} src="FFC.png"></img><br></br>
                  </div>
                  <div style={{ marginTop: 25, marginLeft: 5 }}>
                    <a href="/download-ffc.html" target="_blank">
                      <img style={{ width: 200 }} src="googleplay.svg" alt="Img"></img></a>
                    <a href="/download-ffc.html" target="_blank">
                      <img style={{ width: 180 }} src="apple.png" alt="Img"></img></a>
                  </div>
                </Col>
                <Col span={6}>
                  <Card className="p-4" style={{}}>
                    <h4 style={{ textAlign: 'center' }}>ลงชื่อเข้าใช้</h4>
                    <AvForm style={{ fontSize: 18 }} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>                  <AvGroup>
                      <Label for="example">รพ.สต.</Label>
                      {/* เปลี่ยน name เป็น id */}
                      <AvInput type="select" name="id" onChange={this.onChange} loading={loading} required>
                        <option value="" disabled>--- รพ.สต. ---</option>
                        <Suspense fallback={<div></div>}>
                        {this.createTable()}
                        </Suspense>
                      </AvInput>
                      <AvFeedback>กรุณาเลือก รพ.สต.</AvFeedback>
                    </AvGroup>
                      <AvGroup>
                        <Label for="example">ชือผู้ใช้</Label>
                        <AvInput name="username" placeholder="username" onChange={this.onChange} required />
                        <AvFeedback>กรุณากรอกชื่อผู้ใช้</AvFeedback>
                      </AvGroup>
                      <AvGroup>
                        <Label for="example">รหัสผ่าน</Label>
                        <AvInput type="password" name="password" id="examplePassword" placeholder="password" onChange={this.onChange} required />
                        <AvFeedback>กรุณากรอกรหัสผ่าน</AvFeedback>
                      </AvGroup>
                      <Row>
                        <Col xs="8">
                          <Button color="primary" className="px-4">เข้าสู่ระบบ</Button>
                          <Link to="/signup">
                            <Button style={{ marginLeft: 10 }} color="primary" className="px-4">สมัครใช้งาน</Button>
                          </Link>
                        </Col>
                        <Col xs="4" className="text-right">
                          <Link to="/ForgotPassword">
                            <Button color="link" className="px-0">ลืมรหัสผ่าน</Button>
                          </Link>
                        </Col>
                      </Row>
                    </AvForm>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="off-canvas-wrapper" style={{ marginTop: 100, backgroundColor: '#7bdea7' }}>
            <center>
              <img style={{ height: 300, width: 350, marginTop: 100 }} src="ffo.png"></img>
            </center>
            <div style={{ marginLeft: 380 }}>
              <p style={{ marginTop: 30, color: '#fff' }}><b>``ด้านความปลอดภัย``</b></p>
              <p style={{ color: '#fff', fontSize: 18 }}>มีระบบการรักษาความปลอดภัยให้ฐานข้อมูลด้วยการเข้าและถอดรหัสลับก่อนใช้งานฐานข้อมูล</p>
              <p style={{ color: '#fff', fontSize: 18 }}>เพื่อความปลอดภัยสูงสุดของฐานข้อมูล</p>
              <p style={{ marginTop: 30, color: '#fff' }}><b>``การใช้งาน``</b></p>
              <p style={{ color: '#fff', fontSize: 18 }}>ใช้งานร่วมกับโปรแกรมระบบงานโรงพยาบาลส่งเสริมสุขภาพตำบลและศูนย์สุขภาพชุมชน (JHCIS)</p>
              <p style={{ color: '#fff', fontSize: 18 }}>ศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร ได้อย่างอัตโนมัติ</p>
              <p style={{ color: '#fff', fontSize: 18 }}> ด้วยโปรแกรม FFC Autosync Plus ที่ติดตั้งไว้บนคอมพิวเตอร์แม่ข่าย (Server)</p>
              <p style={{ marginTop: 30, color: '#fff' }}><b>``ยืนยันผู้ใช้``</b></p>
              <p style={{ color: '#fff', fontSize: 18 }}>มีระบบการยืนยันผู้ใช้ที่สามารถเข้าถึงฐานข้อมูลได้ เพิ่มความปลอดภัยอีกระดับ</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 200 }}>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Login;

