import { useState } from 'react'
import SearchBar from "./SearchBar.jsx"
import data from '../../../../server/data/data.js'
import Selections from "./Selections.jsx"

function MainPage({usersSelections, addProduct}) {


  return (
    <div style={{display: "flex", alignItems: "center"}}>
        <SearchBar addProduct={addProduct} placeholder="Enter product name" data={data} />
        <Selections usersSelections={usersSelections}/>
    </div>
  )
}

export default MainPage