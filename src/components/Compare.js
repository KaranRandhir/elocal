import React,{useState} from "react"

const Compare = () => {
    const[checked,setChecked]=useState(false)
    return (
        <div onClick={checked?()=>setChecked(false):()=>setChecked(true)} class="ui checkbox">
        <input checked={checked}  type="checkbox" tabindex="0" class="hidden"/>
        <label style={{fontWeight:"500"}}>Add to compare</label>
      </div>
    )
}

export default Compare;