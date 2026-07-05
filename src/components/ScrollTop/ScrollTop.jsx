import "./ScrollTop.css";

import {FaArrowUp} from "react-icons/fa";

import {useEffect,useState} from "react";

function ScrollTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

setShow(window.scrollY>500);

};

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

return(

show&&

<button

className="scroll-btn"

onClick={()=>window.scrollTo({

top:0,

behavior:"smooth"

})}

>

<FaArrowUp/>

</button>

)

}

export default ScrollTop;