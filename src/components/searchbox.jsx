import React from "react";



function Searchbox(props){


    return(
<div className="pa2">

<input type='search' placeholder="Search robots" 
className="pa3 ba  b--green bg-lightest-blue" value={props.searchInput} onChange={props.onSearch}/>
</div>

        
    )
}









export default Searchbox