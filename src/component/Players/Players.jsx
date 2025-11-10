import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({ handleStorePlayers }) => {
  // state: for players collection
  const [players, setPlayers] = useState([]);

  // effect: handle the fetch data
  useEffect(() => {
    fetch("allPlayers.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.56rem]">
      {players.map((player) => (
        <Player
          key={player.playerId}
          player={player}
          handleStorePlayers={handleStorePlayers}
        ></Player>
      ))}
    </div>
  );
};

// define the propTypes
Players.propTypes = {
  handleStorePlayers: PropTypes.func.isRequired,
};

export default Players;
