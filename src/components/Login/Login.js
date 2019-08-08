import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PostData, Data } from '../../services/PostData';
import Header from '../Header/Header';
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
      redirectToReferrer: false
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  createTable = () => {
    let table = []
    // chk = false
    // ใช้ !temp ได้เลย เช็คได้ทั้ง null กับ undefined
    if (!temp || temp === null) {
      Data().then((result) => {
        temp = result
        temp.forEach(element => {
          table.push(<option value={element.id}>{element.name}</option>)
        });

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
        if (responseJson.user) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
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
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'} />)
    }

    if (sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'} />)

    }
    return (
      <div className="off-canvas-wrapper">
        <Header />
        <div className="app flex-row align-items-center" style={{ marginTop: 80 }}>
          <Container>
            <Row className="justify-content-center">
              <Col md="12">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <h4>ลงชื่อเข้าใช้งานระบบ FFC</h4>
                      <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>                  <AvGroup>
                        <Label for="example">รพ.สต.</Label>
                        {/* เปลี่ยน name เป็น id */}
                        <AvInput type="select" name="id" onChange={this.onChange} required>
                          <option value="" disabled>--- รพ.สต. ---</option>
                          {this.createTable()}
                        </AvInput>
                        <AvFeedback>This field is invalid!</AvFeedback>
                      </AvGroup>
                        <AvGroup>
                          <Label for="example">ชือ</Label>
                          <AvInput name="username" placeholder="username" onChange={this.onChange} required />
                          <AvFeedback>This field is Username!</AvFeedback>
                        </AvGroup>
                        <AvGroup>
                          <Label for="example">รหัสผ่าน</Label>
                          <AvInput type="password" name="password" id="examplePassword" placeholder="password" onChange={this.onChange} required />
                          <AvFeedback>This field is Password!</AvFeedback>
                        </AvGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4">เข้าสู่ระบบ</Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Link to="/ForgotPassword">
                              <Button color="link" className="px-0">ลืมรหัสผ่าน</Button>
                            </Link>
                          </Col>
                        </Row>
                      </AvForm>
                    </CardBody>
                  </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Card className="p-3 mb-2 bg-info text-white" style={{ width: '44%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h4>สมัครใช้งานระบบ FFC</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                        <Link to="/signup">
                          <Button color="primary" className="mt-3" active tabIndex={-1}>สมัครใช้งาน</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="12">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <h3>Features</h3>
                      <h4>คุณสมบัติ</h4>
                    </CardBody>
                  </Card>
                  <Card className="p-4">
                    <CardBody>
                      <h4>ระบบ FFC ทำงานอย่างไร ?</h4>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            <hr />
            <Row className="justify-content-center">
              <Col md="12">
                <CardGroup>
                  <Card>
                    <CardHeader style={{ backgroundColor: '#4dc3ff' }}>about</CardHeader>
                    <CardBody style={{ backgroundColor: '#80d4ff' }}>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader style={{ backgroundColor: '#ff8533' }}>Body</CardHeader>
                    <CardBody style={{ backgroundColor: '#ffa366' }}>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardHeader style={{ backgroundColor: '#ff471a' }}>Footer</CardHeader>
                    <CardBody style={{ backgroundColor: '#ff5c33' }}>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Login;