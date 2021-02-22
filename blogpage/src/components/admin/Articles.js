import React, { Component } from 'react';
import '../../styles/contents.css'

import {Pagination,Tag,Row,Col} from 'antd'

import axios from 'axios'
 
class article extends Component {

    constructor(props){
        super(props)
        this.state={
            min:0,
            max:3,
            list:[]
        }
    }
     
    pageChange=value=>{
        if(value<=1){
            this.setState({
                min:0,
                max:3
            })
        }else{
            this.setState({
                min: (value-1)*3,
                max:(value-1)*3+3
            })
        }
    }

    componentDidMount(){
        axios({
            method:'post',
            url:'http://localhost:4000/admin/articles',
            
        }).then(
            res=>{
                this.setState({
                    list: res.data
                })

            }        
        )
    }


    render() { 
        return (
            <div>
                <Row justify="center">
                    <Col md={21}>
                    
                        {this.state.list.slice(this.state.min,this.state.max).map((v,k)=>{
                            return (
                                <div key={k} className='article'>

                                    <div className="test" >  
                                        
                                        <img src={v.url} alt=""/>
                                            
                                    </div>
                                    
                                    
                                    <div className="maincontent">

                                        <div className='tagDate'>
                                            <Tag color="#D0344E">{v.type}</Tag> 
                                            
                                        </div>
                                        
                                        <br/>

                                        <h1 className="articletitle">{v.title}</h1>
                                        
                                        <br/> 
   
                                        <p className='articlecontent'>{v.content}</p> 
   
                                    </div>
                                    
                                </div>
                            )
                        })} 


                        <Pagination 
                            defaultCurrent={1} 
                            defaultPageSize={3}
                            total={this.state.list.length} 
                            onChange={this.pageChange}
                            style={{textAlign:"center",marginTop:'80px', margin:'80px'}}
                            className="page"
                            
                        />
                            

                    </Col>
                </Row>
            </div>
        );
    }
}
 
export default article;