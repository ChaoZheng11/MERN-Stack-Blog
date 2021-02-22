import React, { Component } from 'react';

import Header from '../components/Header'
import Sider from '../components/Sider'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Slideshow from '../components/Slideshow'

import {Row,Col,BackTop} from 'antd'
 
class blogpage extends Component {
    render() { 
        return (
            <div>

      <Header/>
      
      <Row justify='center'>
        
        <Col xl={22} xxl={22} xs={24}>
          
          <Slideshow/>
        </Col>
        
      </Row>
      

      <Row className="main" justify="center" style={{width:'100%'}}>
        
        <Col sm={17} xs={20} md={18} lg={15} xl={12} xxl={10}>
          <Content/>
        </Col>

        <Col md={0}></Col>

        <Col sm={18} xs={18} md={13} lg={{span:7,offset:1}} xl={6} xxl={5}>
          
          <Sider/>
        </Col> 
       
      </Row>

      

      <Footer/> 

      <BackTop/>
      
      
    </div>
    
        );
    }
}
 
export default blogpage;