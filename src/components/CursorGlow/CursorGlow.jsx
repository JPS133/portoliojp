import "./CursorGlow.css";

import {useEffect} from "react";

function CursorGlow(){

useEffect(()=>{

const glow=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

},[]);

return(

<div className="cursor"></div>

)

}

export default CursorGlow;