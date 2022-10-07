import React, {useState} from 'react'
import './App.css';

var CarregaImg = (props) => {
    var img = props.img
    return(<div>
        <img src={img}/>
    </div>
    )
}

export default CarregaImg;