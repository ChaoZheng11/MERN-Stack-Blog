import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import Header from '../components/Header'
import Sider from '../components/Sider'
import Footer from '../components/Footer'

import {Tag,Row, Col,BackTop} from 'antd'

import '../styles/types.css'

import axios from 'axios'
 
class types extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }


    componentDidMount(){
        axios({
            method:'post',
            url:'http://localhost:4000/types',
            
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

            <Row justify='center'>

                

                <Col sm={17} xs={20} md={18} lg={15} xl={12} xxl={10}>
                    

                    {
                        this.state.list.filter(value=> value.type.toLowerCase()===id).map((v,k)=>{
                            return (
                                <div key={k} className='types'>
                                    
                                    <div className='typeimg'>
                                        <Link to={{pathname:`/list/${v._id}`, query:{id:v._id}}}>
                                            <img src={v.url} alt=""/>
                                        </Link>
                                    </div>
                                    
                                    <br/>
                                    
                                    
                                    <div className='typescontent'>
                                        <div className='typesTag'>
                                            <Tag color="#D0344E">{v.type}</Tag>
                                        </div>

                                        <br/>

                                        <Link to={{pathname:`/list/${v._id}`, query:{id:v._id}}}>
                                            <h1 className='typetitle'>{v.title}</h1>
                                        </Link>
                                        
                                        <br/>

                                        <Link to={{pathname:`/list/${v._id}`, query:{id:v._id}}}>
                                            <p className='typecontent'>
                                                {v.content}
                                            </p>
                                        </Link>
      
                                    </div>   
                                </div>
                            )
                        })
                    }

                </Col>

                <Col sm={18} xs={18} md={{span:14,offset:1}} lg={{span:7,offset:1}} xl={6} xxl={5}>

                    <Sider/>
                </Col> 
            </Row> 


            <Footer/>

            <BackTop/>
        </div>
        );
    }
}
 
export default types;