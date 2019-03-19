import React, { Component } from 'react';
import { CreatData } from '../../services/PostData';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import './creat.css';
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormText, Col, Media } from 'reactstrap';
import { AvForm, AvGroup, AvField, AvInput, AvFeedback, TextInput, FileInput } from 'availity-reactstrap-validation';
import AddressFormTypeahead from 'react-thailand-address-typeahead';
import validator from 'validator'

class Creat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
  };

  handleValidSubmit() {
    localStorage.setItem('access-token', true)
    if (this.state) {
      CreatData('handleValidSubmit', this.state).then((result) => {
        let responseJson = result;
        if (responseJson.user) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/login'} />)

    }

    return (
      <div className="off-canvas-wrapper">
        <Header />
        <div style={{  width: '75%', marginLeft: 180, }}>
          <div style={{ width: '100%', marginTop: 70, }}>
            <h5>เพิ่มสมาชิก</h5>
          </div>
          <AvForm style={{ marginLeft: 60, }} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
            <AvGroup row style={{ marginTop: 70 }}>
              <Label for="exampleagdisplayName" sm={2}>ชื่อหน่วยงาน(ย่อ)</Label>
              <Col xs="6">
                <AvInput name="displayName" placeholder="รพ.สต" onChange={this.onChange} required />
                <AvFeedback>This field is name!</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagName" sm={2}>ชื่อหน่วยงาน(เต็ม)</Label>
              <Col xs="6">
                <AvInput name="name" placeholder="โรงพยาบาลส่งเสริมสุขภาพชุมชน" onChange={this.onChange} required />
                <AvFeedback>This field is name!</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagUsername" sm={2}>ชื่อผู้ใช้</Label>
              <Col xs="6">
                <AvInput name="username" placeholder="ชื่อผู้ใช้" onChange={this.onChange} required />
                <AvFeedback>This field is username!</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row >
              <Label for="exampleagEncy" sm={2}>รหัสผ่าน</Label>
              <Col xs="6">
                <AvField name='users[0].password' placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.password} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
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
                <AvField name="confirmpassword" placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.confirmpassword} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
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
              <Label for="exampleFile" sm={2}>อัพโหลดภาพ</Label>
              <Col xs="6">
                <Input type="file" name="file" id="exampleFile" />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleAddress" sm={2}>ที่อยู่</Label>
              <Col xs="6">
                <AvInput name="address" placeholder="1/4 หมู่บ้าน" onChange={this.onChange} required />
                <AddressFormTypeahead
                  onAddressSelected={(addressObject) => console.log(addressObject)}
                />
                <AvFeedback>This field is name!</AvFeedback>
              </Col>
            </AvGroup>
            {/* <AvGroup row>
              <Label for="exampleMail" sm={2}>Mail หน่วยงาน </Label>
              <Col xs="6">
                <TextInput name="email" id="email" type="email" placeholder="example@gmail.com"
                  validator={validator.isEmail}
                  errorMessage={{ validator: "Please enter a valid email" }}
                  // value={this.state.email}
                  onChange={this.onChange}
                />
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>เบอร์โทร </Label>
              <Col xs="6">
                <TextInput name="phone" id="phone" type="phone" placeholder="xxx-xxx-xxxx" required
                  pattern="(?=.*[0-9]).{10,}"
                  errorMessage={{ required: "phone is required", pattern: "phone should be at least 10 characters " }}
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </Col>
            </AvGroup> */}
            <AvGroup row style={{ marginTop: 70 }}>
              <Label for="exampleagName" sm={2}>หน่วยงาน</Label>
              <Col xs="6">
                <AvInput name="name" placeholder="โรงพยาบาลส่งเสริมสุขภาพชุมชน" onChange={this.onChange} required />
                <AvFeedback>This field is name!</AvFeedback>
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
                  <Button color="primary" href="/home">ok</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
            <hr />
          </AvForm>
        </div>
      </div>
    )
  }
}
export default Creat;


// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Data, CreatData, } from '../../services/PostData';
// import './creat.css';
// import { AvForm, Col, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
// import { Button, Label,  Modal, ModalHeader, ModalBody, ModalFooter, Media } from 'reactstrap';

// class Creat extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       displayName: "",
//       nameadmin: "",
//       passwordadmin: "",
//       redirectToReferrer: false
//     };
//     this.handleValidSubmit = this.handleValidSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.toggle = this.toggle.bind(this);
//   }

//   handleValidSubmit() {
//     localStorage.setItem('access-token', true)
//     if (this.state) {
//       CreatData('handleValidSubmit', this.state).then((result) => {
//         let responseJson = result;
//         if (responseJson.user) {
//           sessionStorage.setItem('userData', JSON.stringify(responseJson));
//           this.setState({ redirectToReferrer: true });
//         }
//       });
//     }
//   }

//   toggle() {
//     this.setState({
//         modal: !this.state.modal
//     });
// }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   render() {
//     if (this.state.redirectToReferrer || sessionStorage.getItem('data')) {
//       return (<Redirect to={'/signup'} />)
//     }
//     return (
//       <div style={{ backgroundColor: '#e6fff9', width: '75%', marginLeft: 180, }}>
//                 <div class="p-3 mb-2 bg-info text-white" style={{ width: '100%', marginTop: 70, }}>
//                     <Media>
//                         <Media left href="#">
//                             <Media object data-src="holder.js/64x64" />
//                         </Media>
//                         <Media body>
//                             <h1>เพิ่มสมาชิกใหม่</h1>
//                         </Media>
//                     </Media>
//                 </div>
//           <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
//             <AvGroup>
//               <Label for="example">ชือย่อ</Label>
//               <AvInput name="name" label="name" type="name" placeholder="รพ.สต." onChange={this.onChange} required />
//               <AvFeedback>This field is name!</AvFeedback>
//             </AvGroup>
//             <AvGroup>
//               <Label for="example">ชื่อเต็ม</Label>
//               <AvInput name="displayName" label="displayName" type="displayName" placeholder="โรงพยาบาลสุขภาตำบล" onChange={this.onChange} required />
//               <AvFeedback>This field is displayName!</AvFeedback>
//             </AvGroup>
//             <AvGroup>
//               <Label for="example">ชื่อแอดมิน</Label>
//               <AvInput name="nameadmin" label="nameadmin" type="nameadmin" placeholder="ชื่อแอดมิน" onChange={this.onChange} required />
//               <AvFeedback>This field is nameadmin!</AvFeedback>
//             </AvGroup>
//             <AvGroup>
//               <Label for="example">รหัสแอดมิน</Label>
//               <AvInput name="passwordadmin" label="passwordadmin" type="passwordadmin" placeholder="รหัสแอดมิน" onChange={this.onChange} required />
//               <AvFeedback>This field is passwordadmin!</AvFeedback>
//             </AvGroup>
//             <div className="small-6 large-centered columns">
//               <Button color="primary">Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
//                     <Button color="primary" onClick={this.toggle}>Cancel</Button>
//               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                 <ModalHeader toggle={this.toggle}></ModalHeader>
//                 <ModalBody>
//                   You are sure cancel?
//                         </ModalBody>
//                 <ModalFooter>
//                   <Button color="primary" href="/home">ok</Button>{' '}
//                   <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                 </ModalFooter>
//               </Modal>
//             </div>
//           </AvForm>
//         </div>
//     );
//   }

// }

// export default Creat;

