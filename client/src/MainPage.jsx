import { useState } from 'react'
import SearchBar from "./SearchBar.jsx"
import data from '../../server/data/data.js'
import Selections from "./Selections.jsx"

function MainPage() {

  const [usersSelections, setUsersSelections] = useState([]);

  const addProduct = (product) => {
    const copy = [...usersSelections];
    copy.push(product);
    setUsersSelections([...copy]);
  } 


  return (
    <div style={{display: "flex", alignItems: "center"}}>
        <SearchBar addProduct={addProduct} placeholder="Enter product name" data={data} />
        <Selections usersSelections={usersSelections}/>
    </div>
  )
}

export default MainPage