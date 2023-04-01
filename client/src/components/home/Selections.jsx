import "./SearchBar.css";

export default function Selections({usersSelections}) {
  return (
    <>
    {usersSelections.length != 0 && (
        <div className="dataResult">
          {usersSelections.map((value, key) => {
            return (
              <div style={{display: "flex", alignItems: "center"}}>
                <p style={{marginLeft: "20px"}}className="dataItem" key={key}>{value.drink} </p>
                <p style={{marginLeft: "20px"}} className="dataItem">{value.caffeine}mg</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  )
}