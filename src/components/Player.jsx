import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditing() {
    setIsEditing((prev) => !prev);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCapiton = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        className="player-name"
        value={playerName}
        onChange={handleNameChange}
      />
    );
    //btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
