import React, { Component } from 'react';

const getIconType = (type='success') => {
    let icons = {
        success : 'thumb-up-outline',
        error : 'alert'
    };
    
    return icons[type];
};

const AlertBox = ({type='success', children}) => (
    <div className={'alert-box mod-' + type}>
        <i className={'mdi mdi-' + getIconType(type) + ' alert-box__icon'}></i>
        <div className="alert-box__text">{children}</div>
    </div>
);

export default AlertBox;