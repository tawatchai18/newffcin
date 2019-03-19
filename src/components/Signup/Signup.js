import React, { Component } from 'react';
import { SignupData, Data } from '../../services/PostData';
import Header from '../Header/Header';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import ReCAPTCHA from "react-google-recaptcha";
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, CardFooter, Col, Media } from 'reactstrap';
// import { ValidationForm, TextInput, } from 'react-bootstrap4-form-validation';
import { AvForm, AvGroup, AvField, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import validator from 'validator'
import RCG from 'react-captcha-generator';

var data = {
    "type": "",
    "name": "",
    "password": "",
    "confirmpassword": "",
    "mail": "",
    "phoneNo": "",
    "role": "ORG",
    "timestamp": new Date(),
    "captcha": ""
}

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "displayName": "",
            users: [data],
            redirectToReferrer: false
        };
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.check = this.check.bind(this)
        this.result = this.result.bind(this)
        this.toggle = this.toggle.bind(this);
        this.name = this.name.bind(this);
        this.password = this.password.bind(this);
        this.pole = this.pole.bind(this);
        this.times = this.times.bind(this);
        this.confirmpassword = this.confirmpassword.bind(this);
        this.mail = this.mail.bind(this);
        this.phoneNo = this.phoneNo.bind(this);
        this.type = this.type.bind(this);
        this.captcha = this.captcha.bind(this);
        this.Change = this.Change.bind(this);
    };

    handleValidSubmit() {
        if (this.state) {
            SignupData('handleValidSubmit', this.state).then((result) => {
                let responseJson = result;
                if (responseJson.users) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
            });
        }
    }
    Change(value) {
        console.log("Captcha value:", value);
      }

    times = (e) => {
        const users = this.state.users;
        users[0].timestamp = e.target.value;
        this.setState({
            users
        });
    };

    pole = (e) => {
        const users = this.state.users;
        users[0].role = e.target.value;
        this.setState({
            users
        });
    };

    password = (e) => {
        const users = this.state.users;
        users[0].password = e.target.value;
        this.setState({
            users
        });
    };

    confirmpassword = (e) => {
        const users = this.state.users;
        users[0].confirmpassword = e.target.value;
        this.setState({
            users
        });
    };

    mail = (e) => {
        const users = this.state.users;
        users[0].mail = e.target.value;
        this.setState({
            users
        });
    };

    phoneNo = (e) => {
        const users = this.state.users;
        users[0].phoneNo = e.target.value;
        this.setState({
            users
        });
    };

    captcha = (e) => {
        const users = this.state.users;
        users[0].captcha = e.target.value;
        this.setState({
            users
        });
    };

    name = (e) => {
        const users = this.state.users;
        users[0].name = e.target.value;
        this.setState({
            users
        });
    };

    type = (e) => {
        const users = this.state.users;
        users[0].type = e.target.value;
        this.setState({
            users
        });
    };
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    matchPassword = (value) => {
        return value && value === this.state.password;
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.check()
    }

    result(text) {
        this.setState({
            captcha: text
        })
    }

    check() {
        console.log(this.state.captcha, this.captchaEnter.value, this.state.captcha === this.captchaEnter.value)
    }

    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/login'} />)
        }
        return (
            <div className="off-canvas-wrapper">
                <Header />
                <div style={{ backgroundColor: '', width: '75%', marginLeft: 180, }}>
                    <div style={{ width: '100%', marginTop: 70, }}>
                        <h1>สมัครหน่วยงานใหม่</h1>
                    </div>
                    <AvForm style={{ marginLeft: 60, }} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                        <AvGroup row style={{ marginTop: 70 }}>
                            <Label for="exampleagName" sm={2}>หน่วยงาน</Label>
                            <Col xs="6">
                                <AvField name="name" placeholder="โรงพยาบาลส่งเสริมสุขภาพชุมชนคลองหลวง" onChange={this.onChange} errorMessage="กรุณากรอกชื่อหน่วยงาน" validate={{
                                    required: { value: true },
                                }} />
                            </Col>
                            {/* <Col xs="2">
                            <Button color="primary" href="/creat">+ เพิ่มหน่วยงาน</Button>
                        </Col> */}
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleagdisplayName" sm={2}>ชื่อย่อหน่วยงาน</Label>
                            <Col xs="6">
                                <AvField name="displayName" placeholder="คลองหลวง" onChange={this.onChange} errorMessage="กรุณากรอกชื่อย่อหน่วยงาน"
                                    validate={{
                                        required: { value: true },
                                    }}
                                />
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleType" sm={2}>ระดับผู้ใช้งาน</Label>
                            <Col xs="6">
                                <AvField name='users[0].type' placeholder="Admin / User" onChange={this.type} errorMessage="กรุณากรอกระดับผู้ใช้งาน "
                                    validate={{
                                        required: { value: true },
                                        pattern: { value: '^[Admin,User]+$' }
                                    }}
                                />
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleName" sm={2}>ชื่อผู้ใช้</Label>
                            <Col xs="6">
                                <AvField name='users[0].name' placeholder="ชื่อผู้ใช้" onChange={this.name} errorMessage="กรุณากรอกชื่อหน่วยงาน *ต้องมี 3 ตัวขึ้นไป"
                                    validate={{
                                        required: { value: true },
                                        pattern: { value: '^[ก-ฮ,a-z,0-9]+$' },
                                        minLength: { value: 3 },
                                        maxLength: { value: 16 }
                                    }}
                                />
                            </Col>
                        </AvGroup>
                        <AvGroup row >
                            <Label for="examplePassword" sm={2}>รหัสผ่าน</Label>
                            <Col xs="6">
                                <AvField type="password" id="examplePassword" placeholder="password" name='users[0].password' placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.password} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
                                    validate={{
                                        required: { value: true },
                                        pattern: { value: '^[0-9,a-z]+$' },
                                        minLength: { value: 8 },
                                        maxLength: { value: 16 }
                                    }}
                                />
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleConfirmpassword" sm={2}>ยืนยันรหัสผ่าน</Label>
                            <Col xs="6">
                                <AvField type="password" id="examplePassword" name="confirmpassword" placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.confirmpassword} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
                                    validate={{
                                        required: { value: true },
                                        pattern: { value: '^[0-9,a-z]+$' },
                                        minLength: { value: 8 },
                                        maxLength: { value: 16 },
                                        match: { value: 'users[0].password' }
                                    }} />
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleagEncy" sm={2}>Mail</Label>
                            <Col xs="6">
                                <AvField name="email" id="email" type="email" placeholder="example@gmail.com" onChange={this.mail} errorMessage="กรุณากรอก mail" validate={{
                                    required: { value: true },
                                }} />
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleagEncy" sm={2}>เบอร์โทร</Label>
                            <Col xs="6">
                                <AvField name="phoneNo" placeholder="0875631234" onChange={this.phoneNo} errorMessage="กรุณากรอกเบอร์โทรศัพท์จำนวน 10 หลัก (0-9)" validate={{
                                    required: { value: true },
                                    pattern: { value: '^[0-9]+$' },
                                    minLength: { value: 10 },
                                    maxLength: { value: 10 }
                                }} />
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleagEncy" sm={2}>พิมพ์ตามภาพ</Label>
                            <Col xs="6">
                                <form onChange={this.captcha} >
                                    <RCG result={this.result} />
                                    <AvField type='text' name="captcha" placeholder="พิมพ์ตามภาพ" className={'xxx'} ref={ref => this.captchaEnter = ref} required />
                                </form>
                            </Col>
                        </AvGroup>
                        <AvGroup row>
                            <Label for="exampleagEncy" sm={2}>พิมพ์ตามภาพ</Label>
                            <Col xs="6">
                            <ReCAPTCHA  sitekey="xxxxxxx" onChange={this.Change}/>
                            </Col>
                        </AvGroup>
                        <div className="small-6 large-centered columns">
                            <Button color="primary">Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button color="primary" onClick={this.toggle}>Cancel</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}></ModalHeader>
                                <ModalBody>
                                    You are sure cancel?
                            </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" href="/login">ok</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </AvForm>
                </div>
            </div>
        )
    }
}
export default Signup;

