import React, { Component } from 'react';

import '../../styles/login.css'

import axios from 'axios'


import { Card, Input,Button ,message } from 'antd';
 
class login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }

    

    handleusername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handlepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    checklogin=()=>{

        let user=this.state.username
        let pass=this.state.password

        let datalogin={
            'username':user,
            'password':pass
        }

        if(!user){
            message.error('username is empty!')
            return false
        }
        else if(!pass){
            message.error('password is empty!')
            return false
        }

        axios({
            method:'post',
            url:'http://localhost:4000/login',
            data:datalogin
        }).then(
            res=>{
                if(res.data==='success'){
                    this.props.history.push('/admin')
                }
                else{
                    message.error('username or password is invaild')
                }
            }
        )

        
    }

    render() { 
        return (
            <div className="login-div">
                
                <Card title="Blog Platform System" bordered={true} style={{ width: "300", textAlign: "center"}} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        value={this.state.username}
                        onChange={this.handleusername}
                        
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handlepassword}
                        
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={this.checklogin}> Login in </Button>
                </Card>
            
                
            </div>
        );
    }
}
 
export default login;