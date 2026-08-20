import { useState } from "react";

import players from "../../data/Players";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Compare.css";

function Compare() {

  const [playerOneId, setPlayerOneId] = useState("");
  const [playerTwoId, setPlayerTwoId] = useState("");


  const playerOne = players.find(
    (player) => player.id === Number(playerOneId)
  );

  const playerTwo = players.find(
    (player) => player.id === Number(playerTwoId)
  );


  return (

    <section className="compare-page">

      <SectionTitle
        title="Compare Players"
        subtitle="Compare IPL players and analyze their career statistics side by side."
      />


      {/* Player Selection */}

      <div className="compare-controls">

        <select
          className="player-select"
          value={playerOneId}
          onChange={(event) =>
            setPlayerOneId(event.target.value)
          }
        >

          <option value="">
            Select Player 1
          </option>

          {players.map((player) => (

            <option
              key={player.id}
              value={player.id}
            >
              {player.name}
            </option>

          ))}

        </select>


        <div className="compare-vs">
          VS
        </div>


        <select
          className="player-select"
          value={playerTwoId}
          onChange={(event) =>
            setPlayerTwoId(event.target.value)
          }
        >

          <option value="">
            Select Player 2
          </option>

          {players.map((player) => (

            <option
              key={player.id}
              value={player.id}
            >
              {player.name}
            </option>

          ))}

        </select>

      </div>


      {/* Comparison */}

      {playerOne && playerTwo ? (

        <div className="comparison-container">

          {/* Player 1 */}

          <div className="comparison-player">

            <div className="comparison-avatar">
              🏏
            </div>

            <h2>
              {playerOne.name}
            </h2>

            <span className="comparison-team">
              {playerOne.team}
            </span>

            <p>
              {playerOne.role}
            </p>

          </div>


          {/* Statistics */}

          <div className="comparison-stats">

            <div className="comparison-row">

              <strong>
                {playerOne.matches}
              </strong>

              <span>
                Matches
              </span>

              <strong>
                {playerTwo.matches}
              </strong>

            </div>


            <div className="comparison-row">

              <strong>
                {playerOne.runs}
              </strong>

              <span>
                Runs
              </span>

              <strong>
                {playerTwo.runs}
              </strong>

            </div>


            <div className="comparison-row">

              <strong>
                {playerOne.wickets}
              </strong>

              <span>
                Wickets
              </span>

              <strong>
                {playerTwo.wickets}
              </strong>

            </div>


            <div className="comparison-row">

              <strong>
                {playerOne.strikeRate}
              </strong>

              <span>
                Strike Rate
              </span>

              <strong>
                {playerTwo.strikeRate}
              </strong>

            </div>


            <div className="comparison-row">

              <strong>
                {playerOne.average}
              </strong>

              <span>
                Average
              </span>

              <strong>
                {playerTwo.average}
              </strong>

            </div>

          </div>


          {/* Player 2 */}

          <div className="comparison-player">

            <div className="comparison-avatar">
              🏏
            </div>

            <h2>
              {playerTwo.name}
            </h2>

            <span className="comparison-team">
              {playerTwo.team}
            </span>

            <p>
              {playerTwo.role}
            </p>

          </div>

        </div>

      ) : (

        <div className="compare-placeholder">

          <div>
            ⚔️
          </div>

          <h2>
            Select Two Players
          </h2>

          <p>
            Choose two players above to compare their IPL statistics.
          </p>

        </div>

      )}

    </section>

  );
}

export default Compare;