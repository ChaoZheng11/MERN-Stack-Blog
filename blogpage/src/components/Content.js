import React,{Component} from 'react'

import '../styles/contents.css'

import {Link} from 'react-router-dom'

import {Pagination,Tag} from 'antd'

import axios from 'axios'

export class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            min:0,
            max:3,
            list:[],
            
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
            url:'http://localhost:4000/',
            
        }).then(
            res=>{
                this.setState({
                    list: res.data
                })

            }        
        )
    }

    render(){
    
        return(
            <div>
              

                {this.state.list.slice(this.state.min,this.state.max).map((v,k)=>{
                    return (
                        <div key={k} className='article'>
                            
                            

                            <div className="test">  
                                <Link to={{pathname:`/list/${v._id}`,query:{id:v._id}}}>
                                    <img src={v.url} alt=""/>
                                </Link>
                                
                            </div>
                            
                            
                            <div className="maincontent">

                                <div className='tagDate'>
                                    <Tag color="#D0344E">{v.type}</Tag> 
                                    {v.date}
                                </div>
                                
                                <br/>

                                <Link to={{pathname:`/list/${v._id}`,query:{id:v._id}}}>
                                    <h1 className="articletitle">{v.title}</h1>
                                </Link>
                                <br/> 

                                
                                
                                <Link to={{pathname:`/list/${v._id}`,query:{id:v._id}}}>
                                        
                                    <p className='articlecontent'>{v.content}</p> 
                                        
                                </Link> 
                                
                                
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
                    
                >
                    
                </Pagination>

                

            </div>
    )

}}

export default Main