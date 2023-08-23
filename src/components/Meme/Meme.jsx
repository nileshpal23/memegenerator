import React, { useEffect, useState } from "react";
import './Meme.scss'

export default function Meme(){
    const [allMemes, setAllMemes] = useState([])
    
    const [meme, setMeme] = useState({
        topText:'',
        bottomText:'',
        url:''
    })

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value}
        })
    }

    function getMeme(){
       setMeme(allMemes[ Math.floor(Math.random() * allMemes.length)]);
    }
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes').then(
            resp => (
                resp.json()
                ).then(
                data => (
                    setAllMemes(data.data.memes)
                )
            )
        )
    }, [meme])

    return(
        <div className="meme-main">
            <div name="form" className="form">
                <input 
                    name='topText' 
                    type="text" 
                    placeholder="Top Input" 
                    className="top-input"
                    value={meme.topText}    
                    onChange={handleChange}
                />
                <input
                    name='bottomText' 
                    type="text" 
                    placeholder="Bottom Input" 
                    className="bottom-input"
                    value={meme.bottomText}    
                    onChange={handleChange}
                />
                <button className="form-button" onClick={getMeme}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.url} className="meme-image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}