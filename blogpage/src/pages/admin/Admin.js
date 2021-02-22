import React, { useState} from 'react';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Add from '../../components/admin/Add'
import Edit from '../../components/admin/Edit'
import Workbench from '../../components/admin/Workbench'
import  Articles from '../../components/admin/Articles'

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Admin(){

        const [collapsed, setCollapsed]=useState(false)
    

        const onCollapse = collapsed => {
            
            setCollapsed(collapsed)
        };
        
       
        return (
            <div>
                <Router>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                            <div className="logo">Blog</div>


                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                
                                <Menu.Item key="1" icon={<DesktopOutlined />}>    
                                    <Link to="/admin/workbench">Workbench</Link>
                                </Menu.Item>
                                
                                <Menu.Item key="2" icon={<PieChartOutlined />}>   
                                    <Link to="/admin/articles">Articles</Link>
                                </Menu.Item>

                                <SubMenu key="sub1" icon={<UserOutlined />} title="Manage">
                                    <Menu.Item key="3">
                                        <Link to="/admin/manage/add">Add Articles</Link>
                                    </Menu.Item>

                                    <Menu.Item key="4">
                                        <Link to="/admin/manage/edit">Edit Articles</Link>    
                                    </Menu.Item>
                                    
                                </SubMenu>
                                
                                <Menu.Item key="6" icon={<MessageOutlined />}>
                                    Messages
                                </Menu.Item>
                            </Menu>
                        </Sider>

                        <Layout className="site-layout">
                            
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>
                                        Chao's Admin System
                                    </Breadcrumb.Item>
                                </Breadcrumb>

                                
                                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                    <div>
                                        <Route path="/admin/workbench" exact component={Workbench}/>
                                        <Route path="/admin/articles" exact component={Articles}/>
                                        <Route path="/admin/manage/add" exact component={Add}/>
                                        <Route path="/admin/manage/edit" exact component={Edit}/>
                                    </div>
                                    
                                </div>
                            </Content>
                            
                            <Footer style={{ textAlign: 'center' }}>Blog platform Created by Chao</Footer>
                        </Layout>

                    </Layout>

                </Router>
            </div>
        );
    
}
 
export default Admin;