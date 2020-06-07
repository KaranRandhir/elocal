import React from "react"
import {Link} from "react-router-dom"

const BreadCrumb = () => {
    return (
        <div class="ui small breadcrumb">
  <Link to="/" class="section">Home</Link>
  <i class="right chevron icon  divider"></i>
  <a class="active section">Product</a>
  
  </div>
    )
}

export default BreadCrumb;