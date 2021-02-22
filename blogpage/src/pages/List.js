import React, { Component } from 'react';

import {Tag,Row, Col,BackTop} from 'antd'

import Header from '../components/Header'
import Comments from '../components/Comment'
import Sider from '../components/Sider'
import Footer from '../components/Footer'

import '../styles/list.css'

import axios from 'axios'

 
class list extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }


    componentDidMount(){
        console.log(this.props)

        axios({
            method:'post',
            url:'http://localhost:4000/list',
            
        }).then(
            res=>{
                this.setState({
                    list: res.data
                })

            }        
        )
    }

    render() { 

        var id=this.props.match.params.id

        return (
            <div>
            
            
            <Header/>
            

             <Row justify='center' >

                

                <Col sm={17} xs={20} md={18} lg={15} xl={12} xxl={10}>
                
                    {
                        this.state.list.filter(value=>value._id===id).map((v,k)=>{
                            return (
                                <div className='list' key={k}>
                                    
                                    <div className='listimg'>
                                        <img src={v.url} alt="" style={{width:'100%'}}/>
                                    </div>
                                    
                                    
                                    
                                    <div className='content'>
                                        <div className='listTag'>
                                            <Tag color="#D0344E">{v.type}</Tag>
                                            
                                        </div>

                                        <br/>
                                        <br/>

                                        <h1 className='listtitle'>{v.title}</h1>

                                        <br/>

                                        <div style={{textAlign:'center'}}>
                                            <img src={v.url1} alt="" style={{width:'80%', textAlign:'center',marginBottom:'10px'}}/>

                                            <img src={v.url2} alt="" style={{width:'80%', textAlign:'center'}}/>
                                        </div>

                
                                        <div>
                                            <p className='listcontent'>{v.content}</p>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    
                                </div>
                            )
                        })
                    }

                    <div style={{backgroundColor:'rgb(255, 255,255)', marginTop:'80px',marginBottom:'80px',width:'100%'}}>
                        <Comments/>
                    </div>
                    
                    
                </Col>

                <Col sm={18} xs={18} md={{span:14,offset:1}} lg={{span:7,offset:1}} xl={6} xxl={5}>
          
                    <Sider/>
                </Col> 
            </Row> 

            
            <BackTop/>
            <Footer/>

            
           
        </div>
        );
    }
}
 
export default list;