import React,{useState} from "react"
import "./Tabs.css"
import INFO from "./DummyInfo"

const Tabs = () => {
    
    const details = INFO["productDetail"]
    const specs = details["productSpecification"]
    const specArray = Object.entries(specs)
    const [active,setActive]=useState(1)
    const description = details["productDescription"]
    
    return (
        <div className="tabs">
            <div class="ui top attached tabular menu">
  <a onClick={()=>setActive(1)} class={`item ${active===1?"active":null}`}>
    Description
  </a>
  <a onClick={()=>setActive(2)} class={`item  ${active===2?"active":null}`} >
    Specifications
  </a>
  <div class="right menu">
    <div class="item">
      
    </div>
  </div>
</div>
<div style={{color:"grey",fontWeight:"500",height:"50vh",overflowY:"auto",fontSize:"1.2rem",lineHeight:"1.8rem"}} class="ui bottom attached segment">
    <div style={{marginTop:"3rem"}}>
       {active===1?description:<table style={{borderCollapse:"separate",borderSpacing:"1.4rem"}}>
    {specArray.map(item=> <tr ><td>{item[0]}</td><td>{item[1]}</td></tr>)}
        </table>}
    </div>
</div>
        </div>
    )
}


export default Tabs;