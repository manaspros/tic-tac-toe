import { useState } from "react";

export default function Player({ initialname, symbol , isActive}) {
  const [playerName,setplayerName]= useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing)=> !isEditing); 
    //in react when we update we should pass a function not like !isEditing as it will shedule it not instentunios
  }
  function handleChange(event){
    setplayerName(event.target.value);
  }

  let editablename = <span className="player-name">{playerName}</span>;
  //let btncaputure = "Edit";

  if (isEditing) {
    editablename =( <input type="text" required value={playerName} onChange={handleChange}/>);
    //btncaputure="Save"
  }

  return (
    <li className={isActive ? 'active' : undefined}> 
      <span className="player">
        {editablename}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save': "Edit"}</button>
    </li>
  );
}
