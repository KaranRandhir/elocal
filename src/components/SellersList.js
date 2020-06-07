import React from "react"
import SELLERS from "./SELLERDUMMY"
import SellerListItem from "./SellerListItem"

const SellersList = () => {
    const sellers=SELLERS["otherSellerList"]
    console.log(SELLERS)
    return (
        <div className="ui large relaxed list">
       {sellers.map(item=><SellerListItem 
       name={item["sellerDetails"]["name"]} 
       place={item["sellerDetails"]["city"]} 
       img={item["sellerDetails"]["sellerResources"][0]["resourceURL"]}
       elocal={item["elocalsPrice"]}
       mrp={item["mrp"]}
       />)}
        </div>
    )
}
export default SellersList;