import React from 'react'

import '../styles/header.css'

import {menulist} from './Data'

import { createFromIconfontCN} from '@ant-design/icons';

import {Affix,Row,Col,List,Drawer} from 'antd'

class Header extends React.Component{

    state ={visible:false,placement:'top'}

    showDrawer =()=>{
        this.setState({
            visible:true,
        })
    }

    onClose=()=>{
        this.setState({
            visible:false,
        })
    }

    onChange =(e)=>{
        this.setState({
            placement:e.target.value,
            
        })
    }

    render () {
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_2313350_nt9qxzp48sl.js',
            
        });


       const {placement,visible} = this.state


        
    return (
        <div style={{width:'100%'}}>

            <Drawer 
                placement={placement} 
                closable={false}
                onClose={this.onClose}
                visible={visible}
                key={placement}
                style={{textAlign:"center"}}
            >

                <List 
                    itemLayout="horizontal"
                    dataSource={menulist}
                    style={{textAlign:"center"}}
                    renderItem={item=>(
                        <List.Item>
                            <List.Item.Meta
                                
                                title={<a href={item.href} id="list">{item.title}</a>}
                            />
                        </List.Item>
                    )}
                />
            </Drawer>


            {/* <Row className='iconall' justify="center">
                <Col lg={{span:12}}>
                </Col>
                
                <Col sm={{span:12,offset:6}} xs={{span:12,offset:6}} md={{span:12, offset:6}} lg={{span:12}} xl={{span:12}} xxl={{span:12}}>  */}
                    <Row  className="iconrow" justify='center'>
                        <Col xs={2} sm={2} md={2} lg={{span:1,offset:18}} xl={{span:1,offset:18}} xxl={{span:1,offset:18}}>
                            <div>
                                <a href="https://www.facebook.com/chao.zheng.7127" target="_blank" rel="noreferrer">
                                    <IconFont type="icon-facebook" style={{fontSize:'18px'}}/>
                                </a>
                            </div>
                        </Col>

                        <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
                            <div>
                                <a href="https://github.com/ChaoZheng11" target="_blank" rel="noreferrer">
                                    <IconFont type="icon-github" style={{fontSize:'18px'}} />
                                </a>
                            </div>
                        </Col>

                        <Col xs={2} sm={2} md={2} lg={1} xl={1} xxl={1}>
                            <div>
                                <a href="mailto:maxzheng110@gmail.com" >
                                    <IconFont type="icon-googleplus" style={{fontSize:'18px'}} />
                                </a>
                            </div> 
                            
                            
                        </Col>

                        <Col xs={2} sm={3} md={2} lg={1} xl={1} xxl={1}>
                            <div>
                                <a href="https://www.linkedin.com/in/chao-zheng-b8918aa5/" target="_blank" rel="noreferrer">
                                    <IconFont type="icon-linkedin" style={{fontSize:'18px'}} />
                                </a>
                            </div>
                        </Col>

                        <Col xs={2} sm={3} md={2} lg={1} xl={1} xxl={1}>
                            <div>
                                <a href="/login">
                                    <IconFont type="icon-login" style={{fontSize:'19px'}}></IconFont>
                                </a>
                            </div>
                            
                        </Col>
                        
                    </Row>
                {/* </Col>    

                
            </Row> */}

            <Row>

            
                {/* <h1>Chao</h1> */}
                <Col xs={0} md={24} lg={24} xl={24}>
                    <Row justify='center'>
                        <div style={{marginTop:'-15px'}}>
                            <a href='/'>
                                <img src="../assets/logo1.png" alt=""/>
                            </a>
                        </div>

                    </Row>
                    
                    <Row justify="center"> 
                    
                        <Affix className="affix">
                            
                            <div className='menubox'>
                                <ul>
                                    <li>
                                        <a href="/">HOME</a>
                                    </li>

                                    <li>
                                        <a href="/resume">ABOUT ME</a>
                                    </li>

                                    <li>
                                        <a href="mailto:maxzheng110@gmail.com">CONTACT ME</a>
                                    </li>
                                </ul>

                            </div>
                            
                        </Affix>
                        

                        <Col md={0}></Col>
                    </Row>
    
                </Col>

                <Col xs={{span:24}} md={0}>
                    
                    
                    <Affix>
                    
                        <Row justify="center" className='logomenu'>
                            <Col span={8} className='bn' >
                                <div style={{marginTop:'-15px'}}>
                                    <a href='/' >
                                        <img src="../assets/logo1.png" alt=""/>
                                    </a>
                                </div>
                                
                    
                            </Col>

                            <Col span={8} offset={4}>
                                <IconFont type="icon-caidan" style={{fontSize:'30px',color:'#D0344E', marginTop:'15px'}} onClick={this.showDrawer} className="icon"/>
                            </Col>
                        </Row>
                    
                    </Affix>
                </Col>
  
            </Row>


        </div>
    )

      
                }
}

export default Header