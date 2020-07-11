import React from 'react';
import {NavLink} from 'react-router-dom';
import './item.css';

const item = (props) => {
    return <NavLink to={props.url} activeClassName="Active-Item" className="Item">
        {props.label}
    </NavLink>
}

export default item;