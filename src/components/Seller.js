import React from "react"
import Feature from "./Feature"
import "./Seller.css"
import {Link} from "react-router-dom"
const Seller = (props) => {
    return (
        <div className="seller">
            <div >
                <Feature light={props.light} dark={props.dark} img={props.img} border />
            </div>
            <Link to="/sellers">
            <div>
               view more sellers
                <button class="ui circular basic icon orange button">
  <i class="orange shopping bag icon"></i>
</button>
            </div></Link>
            
        </div>
    )
}

export default Seller;