import React from "react";
import TrollFace from '../../assets/images/Troll Face.png'
import './Header.scss'

export default function Header(){
    return(
        <div className="header">
            <div className="title-main">
                <img src={TrollFace} className="troll-face-image"/>
                <label className="header-title">Meme Generator</label>
            </div>
            <label className="header-info">React Course - Project 3</label>
        </div>
    )
}