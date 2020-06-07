import React from "react";
import "./ProductCard.css"

const ProductCard = (props) => {
    return(
        <div className="product-card">
            <div>
            <img style={{height:"5rem",width:"5rem",marginRight:"1rem"}}src={props.img}/>
            </div>
            <div>
            <p >{props.name}</p>
            </div>
           
        </div>
    )
}

export default ProductCard;