import React,{useState} from 'react';
import img from "../assets/img1.jpg"
import "./App.css"
import "./ProductImage.css"
const ProductImage = (props) => {
  
  const images=props.images.map(item=>item["resourceURL"])
  const [selectedImg,changeSelectedImg]=useState(images[0])  
  return(
        <div className="product-image">
    <div className="product-image__list">
      {images.map(item =><div className="product-image__list__item"
      onMouseEnter={()=>changeSelectedImg(item)} style={{height:"50px",width:"50px",marginBottom:"5px",display:"flex",alignItems:"center"}}
      className={selectedImg===item?"selected":null}> 
        <img  
         style={{maxHeight:"100%",maxWidth:"100%"}}
        src={item} alt="product" 
        />
        </div>)}
        
    </div>
    <div className="selected-image">
        <div style={{position:"absolute",right:"0",top:"5px"}}>
        <button class="ui circular tiny blue icon button">
  <i class="share alternate icon"></i>
</button>
<button class="ui circular tiny orange icon button">
  <i class="heart icon"></i>
</button>
        </div>
        <img alt="selected" style={{maxWidth:"100%",maxHeight:"100%",margin:"auto"}} src={selectedImg}/>
    </div>
    </div>
  )
}
export default ProductImage ;
