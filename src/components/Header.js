import React, { Children } from 'react';
import {Link, withRouter} from 'react-router-dom';

const Header = props =>{
    const {Component} = props;

    const style = {
        display:'inline-block',
        margin:10,
        marginBottom:30
    };
    return(
        <div>
            <div>
                <h3 style={style}><Link to ='/'>Home</Link></h3>
                <h3 style={style}><Link to ='/jokes'>Jokes</Link></h3>
            </div>
            {props.children}
        </div>
        
    )
}

export default Header;