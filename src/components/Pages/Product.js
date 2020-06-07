import React from "react"
import ProductImage from "../ProductImage"
import "./Product.css"
import BreadCrumb from "../BreadCrumb"
import Compare from "../Compare"
import ProductInfo from "../ProductInfo"
import Seller from "../Seller"
import pic from "../../assets/mobile.jfif"
import Tabs from "../Tabs"
import { render } from "@testing-library/react"
import {fetchProduct} from "../../actions"
import { connect } from "react-redux";

class Product extends React.Component {
    componentDidMount(){
        if(Object.keys(this.props.product).length===0){
        this.props.fetchProduct(12,9,6);}
    }
    render() {
        console.log(this.props.product)
    if(Object.keys(this.props.product).length===0){
        return(
            <div className="loading">
                <div class="ui active dimmer">
    <div class="ui loader"></div>
  </div>
            </div>
        )
    }
        return (
        
        <div className="product">
        <div className="one">
        
        <BreadCrumb/>    
        <Compare/>
        
        </div >
        <div className="two">
            <div className="image-seller">
        <ProductImage images={this.props.product["productDetail"]["productResources"].filter(item=>item["resourceType"]==="image")}/>
        <Seller light="Seller" dark="Rajdeep Telecom" img={pic}/>
        </div>
        <ProductInfo info={this.props.product}/>
        </div>
        <Tabs/>

    </div>
    )}
}
const mapStateToProps = (state)=> {
    return {product:state.product};
}
export default connect(mapStateToProps,
    {fetchProduct})(Product); 