import React, { Component } from 'react';

import {BrowserRouter as Router, Route } from 'react-router-dom'

import Blogpage from './Blogpage'
import Types from './Types'
import List from './List'
import Login from './admin/Login'
import Admin from './admin/Admin'
import Resume from './Resume'
 
class main extends Component {
    render() { 
        return (
            <Router>
                <Route path="/" exact component={Blogpage}/>

                <Route path="/types/:id" component={Types}/>

                <Route path="/list/:id" component={List}/>

                <Route path="/login" component={Login}/>

                <Route path="/admin" component={Admin}/>

                <Route path="/resume" component={Resume}/>
                
                
            </Router>
        );
    }
}
 
export default main;