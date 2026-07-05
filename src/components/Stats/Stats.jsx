import "./Stats.css";

const stats=[

{

number:"15+",

title:"Projects"

},

{

number:"10+",

title:"Technologies"

},

{

number:"300+",

title:"DSA Problems"

},

{

number:"100%",

title:"Dedication"

}

]

function Stats(){

return(

<section className="stats">

{

stats.map((item,index)=>(

<div className="stat-card" key={index}>

<h2>

{item.number}

</h2>

<p>

{item.title}

</p>

</div>

))

}

</section>

)

}

export default Stats;   