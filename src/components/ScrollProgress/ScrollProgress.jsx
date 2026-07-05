import { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress(){

const [scroll,setScroll]=useState(0);

useEffect(()=>{

const progress=()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

setScroll(current);

};

window.addEventListener("scroll",progress);

return()=>window.removeEventListener("scroll",progress);

},[]);

return(

<div

className="progress"

style={{width:`${scroll}%`}}

>

</div>

);

}

export default ScrollProgress;