
import { useState } from "react";

import matches from "../../data/Matches";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Matches.css";

function Matches() {

  const [searchTerm, setSearchTerm] = useState("");
  const [teamFilter, setTeamFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("default");


  // Filter Matches
  const filteredMatches = matches.filter((match) => {

    const matchesSearch =
      match.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.team2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.venue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTeam =
      teamFilter === "All" ||
      match.team1 === teamFilter ||
      match.team2 === teamFilter;

    const matchesStatus =
      statusFilter === "All" ||
      match.status === statusFilter;

    return matchesSearch && matchesTeam && matchesStatus;
  });


  // Sort Matches
  const sortedMatches = [...filteredMatches];

  switch (sortOption) {

    case "dateAsc":
      sortedMatches.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      break;

    case "dateDesc":
      sortedMatches.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      break;

    case "teamAsc":
      sortedMatches.sort(
        (a, b) => a.team1.localeCompare(b.team1)
      );
      break;

    default:
      break;
  }


  return (

    <section className="matches-page">

      <SectionTitle
        title="IPL Matches"
        subtitle="Explore IPL match schedules, venues, results and upcoming fixtures."
      />


      {/* ================= Controls ================= */}

      <div className="controls-section">

        {/* Search */}

        <div className="search-section">

          <input
            type="text"
            placeholder="🔍 Search matches..."
            className="search-input"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        {/* Team Filter */}

        <div className="filter-section">

          <select
            className="filter-select"
            value={teamFilter}
            onChange={(event) =>
              setTeamFilter(event.target.value)
            }
          >

            <option value="All">All Teams</option>

            <option value="RCB">RCB</option>
            <option value="CSK">CSK</option>
            <option value="MI">MI</option>
            <option value="KKR">KKR</option>
            <option value="GT">GT</option>
            <option value="RR">RR</option>
            <option value="SRH">SRH</option>
            <option value="PBKS">PBKS</option>
            <option value="DC">DC</option>
            <option value="LSG">LSG</option>

          </select>

        </div>


        {/* Status Filter */}

        <div className="filter-section">

          <select
            className="filter-select"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >

            <option value="All">All Status</option>

            <option value="Completed">Completed</option>

            <option value="Upcoming">Upcoming</option>

          </select>

        </div>


        {/* Sort */}

        <div className="sort-section">

          <select
            className="sort-select"
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value)
            }
          >

            <option value="default">
              🔄 Default
            </option>

            <option value="dateAsc">
              📅 Date (Oldest)
            </option>

            <option value="dateDesc">
              📅 Date (Newest)
            </option>

            <option value="teamAsc">
              🔤 Team (A-Z)
            </option>

          </select>

        </div>

      </div>


      {/* ================= Match Cards ================= */}

      <div className="matches-grid">

        {sortedMatches.length > 0 ? (

          sortedMatches.map((match) => (

            <div
              className="match-card"
              key={match.id}
            >

              <div className="match-header">

                <span>{match.date}</span>

                <span>{match.time}</span>

              </div>


              <div className="teams-row">

                <div className="match-team">

                  <div className="team-circle">
                    {match.team1}
                  </div>

                  <strong>
                    {match.team1}
                  </strong>

                </div>


                <div className="vs">
                  VS
                </div>


                <div className="match-team">

                  <div className="team-circle">
                    {match.team2}
                  </div>

                  <strong>
                    {match.team2}
                  </strong>

                </div>

              </div>


              <div className="match-info">

                <p>
                  📍 {match.venue}
                </p>


                <span
                  className={
                    match.status === "Completed"
                      ? "match-status completed"
                      : "match-status upcoming"
                  }
                >
                  {match.status}
                </span>


                <p className="match-result">
                  {match.result}
                </p>

              </div>

            </div>

          ))

        ) : (

          <div className="no-results">

            <h2>🔍 No Matches Found</h2>

            <p>
              Try searching with another team or venue.
            </p>

          </div>

        )}

      </div>

    </section>

  );
}

export default Matches;