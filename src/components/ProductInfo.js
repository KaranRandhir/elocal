import React from "react";

import "./ProductInfo.css";
import "./Feature.js";
import delivery from "../assets/delivery.svg";
import Feature from "./Feature.js";
import bestprice from "../assets/best-price.svg";
import returnsvg from "../assets/return.svg";
import pickup from "../assets/pickup.svg";

const ProductInfo = (props) => {
  const details = props.info["productDetail"];
  const features = details["productKeyFeatures"];
  const values = Object.values(features);
  const variants = details["variants"];
  const variant = variants[0];
  console.log(props.info);
  return (
    <div className="product-info">
      <div className="product-info__heading">{details["productName"]}</div>
      <ul className="product-info__features">
        {values.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className="product-info__orange-buttons">
        <button class="ui  orange button">Delivery in 24 hours</button>
        <button class="ui orange button">Emi Available</button>
        <button class="ui orange  button">Pay later</button>
      </div>
      <div className="product-info__price">
        <span className="elocals-price"> {"₹" + variant["elocalsPrice"]}</span>
        <span className="mrp">{+variant["mrp"]}</span>
        <span className="discount">
          {"  " +
            (
              ((variant["mrp"] - variant["elocalsPrice"]) / variant["mrp"]) *
              100
            ).toFixed(0) +
            "%"}
        </span>
        <div style={{ color: "steelblue" }}>inclusive of all taxes</div>
      </div>
      <div className="product-info__blue-buttons">
        <button class="ui primary large button">
          <i class="bolt icon"></i>
          Buy Now
        </button>
        <button class="ui basic large blue button">
          <i class="bag shopping icon"></i>
          Add to Cart
        </button>
        <button class="ui basic large blue button">
          <i class="male icon"></i>
          Store Pickup
        </button>
      </div>
      <div className="calendar">
        <button class="ui basic large blue button">
          <i class="calendar icon"></i>
          Calendar Delivery
        </button>
      </div>
      <div className="features">
        <Feature img={delivery} light="Shipping Fee" dark="Free" />
        <Feature img={bestprice} light="Best Price" dark="Always" />
        <Feature img={pickup} light="Pickup Service" dark="one hour" />
        <Feature
          img={returnsvg}
          light="Request your Product"
          dark="Get Anything"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
