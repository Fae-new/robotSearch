import React from "react";


function Card(props){
    const{name,email,id}=props
    return(
  
<div className=" tc bg-light-green dib pa3 ma3 grow bw2 shadow-5">
<img src={`https://robohash.org/${id}size=200x200`} alt="robots"></img>
<div>
<h1>{name}</h1>
<p>{ email}</p>


</div>
</div>

    )
}


export default Card;