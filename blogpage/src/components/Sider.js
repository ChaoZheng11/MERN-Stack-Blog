import React from 'react'

import '../styles/sider.css'

import {Link} from 'react-router-dom'

import {Card,List} from 'antd'

const Sider =()=>{

    const data=[
        'LIFESTYLE',
        'FUTURE PLANS',
        'STUDY ABROAD'  
        
    ]

    return (
        <div>
            

            <Card hoverable>
                <div className="title"></div>
                <h1 style={{float:'left'}}>ABOUT ME</h1><br/><br/>
                <img src='../assets/head.jpg' className='cardhead' alt=""></img>
                <p style={{textAlign:'justify'}}>Hi, I am Chao Zheng. As for now I'm aim to be a professional Web Developer. And I wanna share my life, future careers plans and experiences in this site. Welcome the discussion! "</p>
                <img src="../assets/sign1.png" alt="" className='sign'/>
            </Card>

            <br/>
            <Card hoverable className="card2">
                <div className="title"></div>
                <h1 style={{float:'left'}}>TYPES</h1>
                
                <br/><br/>
                <List
                    
                    dataSource={data}
                    renderItem={item=>(
                        <List.Item>

                            <Link to={{pathname:`/types/${item.toLowerCase()}`, query:{id: item.toLowerCase()}}}>
                                <p className="type">{item}</p>
                            </Link>
                                  
                        </List.Item>
                    )}
                >
                    
                </List>

            </Card>

            <br/>
            <Card hoverable className='card3'>
                <div className="title"></div>
                <h1 style={{float:'left'}}>NEWS</h1><br/><br/>
                
                <p style={{textAlign:'justify'}}>Recently I rewrote my blog framework and updated blog contents, so some contents are old. However, I will update new contents for future life...</p>
                
            </Card>

            
            
        </div>
    )

}

export default Sider