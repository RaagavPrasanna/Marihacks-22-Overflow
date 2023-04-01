import "./SearchBar.css";

export default function Selections({usersSelections}) {
  return (
    <>
    {usersSelections.length != 0 && (
        <div className="dataResult">
          {usersSelections.map((value, key) => {
            return (
              <div style={{display: "flex", alignItems: "center"}} onClick={() => addProduct(value)}>
                <p style={{marginLeft: "20px"}}className="dataItem" key={key} onClick={() => console.log(value)}>{value.drink} </p>
                <p style={{marginLeft: "20px"}} className="dataItem">{value.caffeine}mg</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  )
}