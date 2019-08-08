import React, { Component } from 'react';
import { CreatUser, CreatData } from '../../services/PostData';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './creat.css';
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Col, } from 'reactstrap';
import { AvForm, AvGroup, AvField, AvInput, AvFeedback, TextInput, FileInput } from 'availity-reactstrap-validation';
import AddressFormTypeahead from 'react-thailand-address-typeahead';
import validator from 'validator'

class Creat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      data: [
        {
          "a": "",
          "b": "",
          "c": "",
          "d": "",
          "e": "",
          "f": "",
          "name": "",
          "password": "",
          "confirmpassword": "",
          "roles": [""],
          "file": "",
          "email": "",
          "phoneNo": "",
          "timestamp": new Date(),
          redirectToReferrer: false
        }]
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.name = this.name.bind(this);
    this.password = this.password.bind(this);
    this.confirmpassword = this.confirmpassword.bind(this);
    this.roles = this.roles.bind(this);
    this.file = this.file.bind(this);
    this.email = this.email.bind(this);
    this.phoneNo = this.phoneNo.bind(this);
    this.a = this.a.bind(this);
    this.b = this.b.bind(this);
    this.c = this.c.bind(this);
    this.d = this.d.bind(this);
    this.e = this.e.bind(this);
    this.f = this.f.bind(this);
  };
  handleValidSubmit() { 
    if (this.state.data) {
      const da = localStorage.getItem('userdata')
      const userdata = JSON.parse(da)
      const id = userdata.user.orgId
      const token = userdata.token
      console.log(token,'iiopppppp');
      console.log('niuyrgfbbf', userdata.user.orgId);
      CreatUser(id, token, this.state.data).then((result) => {
        this.setState({ redirectToReferrer: true });
        let responseJson = result;
        console.log(responseJson, 'oooooooo123');
        if (responseJson.role) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
        }
      });
      alert('สมัครสมาชิกสำเร็จ')
    }
  }
  a = (e) => {
    const data = this.state.data;
    data[0].a = e.target.value;
    this.setState({
      data
    });
  };

  b = (e) => {
    const data = this.state.data;
    data[0].b = e.target.value;
    this.setState({
      data
    });
  };

  c = (e) => {
    const data = this.state.data;
    data[0].c = e.target.value;
    this.setState({
      data
    });
  };

  d = (e) => {
    const data = this.state.data;
    data[0].d = e.target.value;
    this.setState({
      data
    });
  };

  e = (e) => {
    const data = this.state.data;
    data[0].e = e.target.value;
    this.setState({
      data
    });
  };

  f = (e) => {
    const data = this.state.data;
    data[0].f = e.target.value;
    this.setState({
      data
    });
  };

  name = (e) => {
    const data = this.state.data;
    data[0].name = e.target.value;
    this.setState({
      data
    });
  };

  password = (e) => {
    const data = this.state.data;
    data[0].password = e.target.value;
    this.setState({
      data
    });
  };

  confirmpassword = (e) => {
    const data = this.state.data;
    data[0].confirmpassword = e.target.value;
    this.setState({
      data
    });
  };

  type = (e) => {
    const data = this.state.data;
    data[0].type = e.target.value;
    this.setState({
      data
    });
  };

  roles = (e) => {
    const data = this.state.data;
    data[0].roles = e.target.value;
    this.setState({
      data
    });
  };

  file = (e) => {
    const data = this.state.data;
    data[0].file = e.target.value;
    this.setState({
      data
    });
  };

  email = (e) => {
    const data = this.state.data;
    data[0].email = e.target.value;
    this.setState({
      data
    });
  };

  phoneNo = (e) => {
    const data = this.state.data;
    data[0].phoneNo = e.target.value;
    this.setState({
      data
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  filter = (data, name) => {
    return data.map((d) => d.name === name ? d.name : {})

  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'} />)
    }
    return (
      <div className="off-canvas-wrapper" style={{fontFamily: 'Kanit'}}>
        <Header />
        <div style={{ width: '75%', marginLeft: 180, }}>
          <div style={{ width: '100%', marginTop: 70, }}>
            <h3 style={{fontFamily: 'Kanit'}}>เพิ่มสมาชิก</h3>
          </div>

          <AvForm style={{ marginLeft: 60, fontSize:18 }} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
            <AvGroup row style={{ marginTop: 70 }}>
              <Label for="exampleagName" sm={2}>ชื่อผู้ใช้</Label>
              <Col xs="6">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].name" placeholder="ชื่อผู้ใช้" onChange={this.name} required />
                  ))
                }
                <AvFeedback>กรุณากรอกชื่อผู้ใช้</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row >
              <Label for="exampleagEncy" sm={2}>รหัสผ่าน</Label>
              <Col xs="6">
                <AvField type="password" name='data[0].password' placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.password} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
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
              <Label for="exampleagEncy" sm={2}>ยืนยันรหัสผ่าน</Label>
              <Col xs="6">
                <AvField type="password" name="confirmpassword" placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.confirmpassword} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
                  validate={{
                    required: { value: true },
                    pattern: { value: '^[0-9,a-z]+$' },
                    minLength: { value: 8 },
                    maxLength: { value: 16 },
                    match: { value: 'data[0].password' }
                  }} />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>ระดับผู้ใช้งาน</Label>
              <Col xs="6">
                <AvField type="select" name="select" errorMessage="กรุณากรอกระดับผู้ใช้งาน "
                  validate={{
                    required: { value: true },
                    pattern: { value: '^[ADMIN,PROVIDER,SURVEYOR,PATIENT,SYNC_AGEN]+$' }
                  }}>
                  <option value="" disabled>--- ระดับผู้ใช้งาน ---</option>
                  <option name='data[0].roles' onChange={this.roles}>ADMIN</option>
                  <option name='data[0].roles' onChange={this.roles}>PROVIDER</option>
                  <option name='data[0].roles' onChange={this.roles}>SURVEYOR</option>
                  <option name='data[0].roles' onChange={this.roles}>PATIENT</option>
                  <option name='data[0].roles' onChange={this.roles}>SYNC_AGEN</option>
                </AvField>
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleFile" sm={2}>อัพโหลดภาพ</Label>
              <Col xs="6">
                <AvField type="file" name="data[0].file" id="exampleFile" onChange={this.file} errorMessage="กรุณาอัพโหลดภาพ" validate={{
                  required: { value: true },
                }} />
              </Col>
            </AvGroup>
            <AvGroup row >
              <Label for="exampleagName" sm={2}>ที่อยู่</Label>
              <Col xs="2">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].a" placeholder="1/4" onChange={this.a} required />
                  ))
                }
                <AvFeedback>กรุณากรอกบ้านเลขที่</AvFeedback>
              </Col>
              <Col xs="4">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].b" placeholder="หมู่บ้าน/อาคาร" onChange={this.b} required />
                  ))
                }
                <AvFeedback>กรุณากรอก หมู่บ้าน/อาคาร</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row >
              <Label for="exampleagName" sm={2}></Label>
              <Col xs="3">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].c" placeholder="แขวง/ตำบล" onChange={this.c} required />
                  ))
                }
                <AvFeedback>กรุณากรอก แขวง/ตำบล</AvFeedback>
              </Col>
              <Col xs="3">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].d" placeholder="เขต/อำเภอ" onChange={this.d} required />
                  ))
                }
                <AvFeedback>กรุณากรอก เขต/อำเภอ</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row >
              <Label for="exampleagName" sm={2}></Label>
              <Col xs="4">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].e" placeholder="จังหวัด" onChange={this.e} required />
                  ))
                }
                <AvFeedback>กรุณากรอกจังหวัด</AvFeedback>
              </Col>
              <Col xs="2">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].f" placeholder="ไปรษณีย์" onChange={this.f} required />
                  ))
                }
                <AvFeedback>กรุณากรอกไปรษณีย์</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>เบอร์โทร</Label>
              <Col xs="6">
                <AvField name="data[0].phoneNo" placeholder="0875631234" onChange={this.phoneNo} errorMessage="กรุณากรอกเบอร์โทรศัพท์จำนวน 10 หลัก (0-9)" validate={{
                  required: { value: true },
                  pattern: { value: '^[0-9]+$' },
                  minLength: { value: 10 },
                  maxLength: { value: 10 }
                }} />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>Mail</Label>
              <Col xs="6">
                <AvField name="data[0].email" id="email" type="email" placeholder="example@gmail.com" onChange={this.email} errorMessage="กรุณากรอก mail" validate={{
                  required: { value: true },
                }} />
              </Col>
            </AvGroup>
            {/* <AvGroup row>
              <Label for="exampleAddress" sm={2}>ที่อยู่</Label>
              <Col xs="6">
                <AvInput name="address" placeholder="1/4 หมู่บ้าน" onChange={this.onChange} required />
                <AddressFormTypeahead
                  onAddressSelected={(addressObject) => console.log(addressObject)}
                />
                <AvFeedback>This field is name!</AvFeedback>
              </Col>
            </AvGroup> */}
            <div className="small-6 large-centered columns">
              <Button color="primary">Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="primary" onClick={this.toggle}>Cancel</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                  You are sure cancel?
              </ModalBody>
                <ModalFooter>
                  <Button color="primary" href="/home">ok</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
            <hr />
          </AvForm>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}
export default Creat;

