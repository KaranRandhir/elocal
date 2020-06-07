import React from "react";
import SellersList from "../SellersList";
import ProductCard from "../ProductCard";
import "./Sellers.css";
import delivery from "../../assets/delivery.svg";
import { Link } from "react-router-dom";
import { fetchSellers, fetchProduct } from "../../actions";
import { connect } from "react-redux";
class Sellers extends React.Component {
  async componentDidMount() {
    if (Object.keys(this.props.product).length === 0) {
      this.props.fetchProduct(12, 9, 6);
    }
    if (Object.keys(this.props.sellers).length === 0) {
      this.props.fetchSellers(9, 6);
    }
  }

  render() {
      
    if (
      Object.keys(this.props.product).length === 0 ||
      Object.keys(this.props.sellers).length === 0
    ){
      return (
        <div className="loading">
        <div class="ui active dimmer">
<div class="ui loader"></div>
</div>
    </div>
      );}

    return (
      <div className="sellers-list">
        <div className="back">

          <Link to="/productDetail"> {`<`}back to product</Link>
          <ProductCard
            name={this.props.product["productDetail"]["productName"]}
            img={
              this.props.product["productDetail"]["productResources"][0][
                "resourceURL"
              ]
            }
          />
        </div>
        
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"1rem",fontSize:"1.2rem",fontWeight:"bold"}}>
            <div>Seller Details</div>
            <div>Price</div>            
            </div>
            <div class="ui divider"></div>
        <div>
          <SellersList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    sellers: state.sellers,
  };
};
export default connect(mapStateToProps, { fetchSellers, fetchProduct })(
  Sellers
);
