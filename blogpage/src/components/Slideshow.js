import React, { Component } from 'react';

import {Carousel} from 'antd'

class slideshow extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay className="scoll">
                    <div>
                        <img src='../assets/scoll1.jpeg' className="pic" alt=""></img>
                    </div>

                    <div>
                        <img src='../assets/scoll2.jpeg' className="pic" alt=""></img>
                    </div>        

                    
                </Carousel>
            </div>
        );
    }
}

export default slideshow;