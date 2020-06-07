import React from "react"
import "./Feature.css"

const Feature = (props) => {
    return (
        <div className={`feature ${props.border && "borderstyle"}`}>
            <div className="feature__image">
                <img className="feature__img" alt="feature" src={props.img}/>
            </div>
            <div className="feature__content">
                <div className="feature__content__light">
                    {props.light}
                </div>
                <div className="feature__content__dark">
                    {props.dark}
                </div> 
            </div>
        </div>
    )
}

export default Feature;