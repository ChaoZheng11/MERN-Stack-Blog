import React, { Component } from 'react';
 
import {Row, Col, Input, Select, Button, message} from 'antd'

import axios from 'axios'

const {Option} =Select
const {TextArea} =Input

class add extends Component { 

    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            url:'',
            url1:'',
            url2:'',
            type:[
                {key:1, select:'LIFESTYLE'},
                {key:2, select:'FUTURE PLANS'},
                {key:3, select:'STUDY ABROAD'}
            ],
            list:''
        }

    }

    handletitle =(e)=>{
        this.setState({
            title:e.target.value
        })
    }

    handlecontent =(e)=>{
        this.setState({
            content:e.target.value
        })
    }

    handletype=(e)=>{
        this.setState({
            list:e.label
        })
    }

    handleurl=(e)=>{
        this.setState({
            url:e.target.value
        })
    }

    handleurl1=(e)=>{
        this.setState({
            url1:e.target.value
        })
    }

    handleurl2=(e)=>{
        this.setState({
            url2:e.target.value
        })
    }

    upload=()=>{
        let title=this.state.title
        let content=this.state.content
        let list=this.state.list
        let url=this.state.url
        let url1=this.state.url1
        let url2=this.state.url2

        let addArticle={
            'title':title,
            'type':list,
            'content':content,
            'url':url,
            'url1':url1,
            'url2':url2
        }

        if(!title || !content || !list || !url || !url1 || !url2){
            message.error('Please fill areas')
        }
        else{

            axios({
                method:'post',
                url:'http://localhost:4000/admin/manage/add',
                data: addArticle
            }).then(
                res=>{
                    if(res.data==='success'){
                        
                        message.success('Upload successfully')
                    }
                    else if(res.data==='conflict'){
                        message.error('Article is existing')
                    }

                }
            )
        }
    }



    render (){

        return (
            <div>

                <Row justify="center" gutter={16} style={{marginBottom:'10px'}}>
                    <Col span={13}>
                        <Input 
                            placeholder="Title*" 
                            value={this.state.title}
                            onChange={this.handletitle}
                            size="middle"
                        />
                    </Col>
                    <Col span={5}>
                        <Select labelInValue size="middle" onChange={this.handletype}>
                           {this.state.type.map((v,k)=>{
                               return <Option value={v.key} key={k}>{v.select}</Option>
                           })}
                        </Select>
                    </Col>
                </Row>

                <Row justify="center" style={{marginBottom:'10px'}}>
                    <Col span={18}>
                           <Input placeholder="Url*" onChange={this.handleurl} value={this.state.url}></Input>
                    </Col>
                </Row>

                <Row justify="center" style={{marginBottom:'10px'}}>
                    <Col span={18}>
                           <Input placeholder="spare url1*" onChange={this.handleurl1} value={this.state.url1}></Input>
                    </Col>
                </Row>

                <Row justify="center" style={{marginBottom:'10px'}}>
                    <Col span={18}>
                           <Input placeholder="spare url2*" onChange={this.handleurl2} value={this.state.url2}></Input>
                    </Col>
                </Row>

                <Row justify="center" style={{marginBottom:'10px'}}>
                    <Col span={18}>
                        <TextArea 
                            rows={10}
                            placeholder="Content*"
                            value={this.state.content}
                            onChange={this.handlecontent}
                            style={{width:"100%"}}
                        />
                    </Col>
                </Row>

                <Row justify="center" >

                    <Button type="primary" onClick={this.upload}>Upload</Button>

                </Row>

            </div>
    )
}}

 export default add