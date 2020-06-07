import React from "react"
import ProductImage from "../ProductImage"
import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div className="home">
           <Link to="/productdetail">
           <button style={{marginBottom:".5rem"}} class="ui primary large button">
  Product
</button>
</Link>
<Link to="/sellers">
<button class="ui primary large button">
  Sellers
</button>
</Link>

        </div>
    )
}

export default Home;