import React, { Component } from 'react'
import Item from './items/item'
import './navigator.css'

class Navigator extends Component {
    render() {
        return (
            <div className="Navigator">
                <Item label="Tỉ giá ngoại tệ" url='/forex'/>
                <Item label="Dự đoán ngoại tệ" url ='/predicted-forex'/>
            </div>
        )
    }
}

export default Navigator