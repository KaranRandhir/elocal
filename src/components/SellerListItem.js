import React from "react"
import "./SellerListItem.css"

const SellerListItem = (props) => {
    return (
        <div class="item">
             <div class="left floated content">
                 <input type="radio" name="seller"/>
             </div>
              <div class="right floated content">
      <span className="elocal-price">
          {"₹"+props.elocal}</span><span className="mrpd">{props.mrp}</span>
      <span className="list-discount">{((props.mrp-props.elocal)/props.mrp*100).toFixed(0)+"%"}</span>
    </div>
        <img class="ui avatar image" src={props.img}/>
        <div class="content">
            
    <a class="header">{props.name}</a>
    <div class="description">{props.place}</div>
        </div>
      </div>
    )
}

export default SellerListItem;