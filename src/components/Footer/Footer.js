import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './Footer.css';

class Footer extends Component {
  render() {
    const { Footer } = Layout;
    return (
      <div>
        <Layout style={{fontFamily: 'Kanit'}}>
          <Footer style={{ backgroundColor: '#46bd93' }}>
            <center>
              <img style={{ height: 45, width: 100 }} src="nstda.png"></img>
              <p style={{ fontSize: 16, color: '#fff', marginTop:10 }}>สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
            </center>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Footer;