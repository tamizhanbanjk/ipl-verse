import { useState } from "react";

import pointsTable from "../../data/PointsTable";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./PointsTable.css";

function PointsTable() {

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] = useState("position");


  // Search Teams

  const filteredTeams = pointsTable.filter((team) =>
    team.team
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  // Sort Teams

  const sortedTeams = [...filteredTeams];

  switch (sortOption) {

    case "points":
      sortedTeams.sort(
        (a, b) => b.points - a.points
      );
      break;

    case "wins":
      sortedTeams.sort(
        (a, b) => b.won - a.won
      );
      break;

    case "losses":
      sortedTeams.sort(
        (a, b) => b.lost - a.lost
      );
      break;

    case "nrr":
      sortedTeams.sort(
        (a, b) =>
          parseFloat(b.netRunRate) -
          parseFloat(a.netRunRate)
      );
      break;

    default:
      break;
  }


  return (

    <section className="points-page">

      <SectionTitle
        title="IPL Points Table"
        subtitle="Track team standings, wins, losses, points and net run rate."
      />


      {/* Search + Sort */}

      <div className="points-controls">

        <input
          type="text"
          placeholder="🔍 Search team..."
          className="points-search"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />


        <select
          className="points-sort"
          value={sortOption}
          onChange={(event) =>
            setSortOption(event.target.value)
          }
        >

          <option value="position">
            🔄 Position
          </option>

          <option value="points">
            🏆 Most Points
          </option>

          <option value="wins">
            ✅ Most Wins
          </option>

          <option value="losses">
            ❌ Most Losses
          </option>

          <option value="nrr">
            📊 Best NRR
          </option>

        </select>

      </div>


      {/* Points Table */}

      <div className="points-table-container">

        <table className="points-table">

          <thead>

            <tr>

              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>NR</th>
              <th>NRR</th>
              <th>Points</th>

            </tr>

          </thead>


          <tbody>

            {sortedTeams.length > 0 ? (

              sortedTeams.map((team, index) => (

                <tr key={team.id}>

                  <td className="position">
                    {index + 1}
                  </td>

                  <td className="team-name">
                    {team.team}
                  </td>

                  <td>
                    {team.played}
                  </td>

                  <td className="wins">
                    {team.won}
                  </td>

                  <td className="losses">
                    {team.lost}
                  </td>

                  <td>
                    {team.noResult}
                  </td>

                  <td>
                    {team.netRunRate}
                  </td>

                  <td className="points">
                    {team.points}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="no-table-results"
                >
                  🔍 No teams found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>

  );
}

export default PointsTable;