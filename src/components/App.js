import React from "react";
import Card from "./card";
import { robots } from "../robots";
import Searchbox from "./searchbox";
import Scroll from "./scroll";



function App() {

  const [Robots]=React.useState(robots)
  const [searchInput,setSearchInput]=React.useState('')

const search=(e)=>{
setSearchInput(e.target.value)
  }


  const renderRobots=()=>{
    return(
    Robots.filter(robot=>robot.name.toLowerCase().includes(searchInput.toLowerCase())).map((robot)=>{
      return(
<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
      )}))
  }

  
  return (
<div className="tc">
<h1 className="f1"> ROBO FRIENDS</h1>

<Searchbox
  onSearch={search}
searchInput={searchInput}
/>
<Scroll>

   { renderRobots()}
   </Scroll>


</div>
  );
}

export default App;
