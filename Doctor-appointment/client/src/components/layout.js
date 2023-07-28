import React, { Children } from "react";
import '../styles/layout.css';
const layout =()=>{
    return(
       <>
        <div className="main">
        <div className="layout">
        <div className="sidebar">
        <div className="logo">logo</div>
        <h6> doc app</h6>
        <div className="menu">menu</div>
        </div>
<div className="content"></div>
<div className="header">header</div>
<div className="body">{Children}</div>
        </div>
        </div>
       </> 
    )
}
export default layout