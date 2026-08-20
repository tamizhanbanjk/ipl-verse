import { useState } from "react";

import venues from "../../data/Venues";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Venues.css";

function Venues() {

  const [searchTerm, setSearchTerm] = useState("");
  const [teamFilter, setTeamFilter] = useState("All");
  const [sortOption, setSortOption] = useState("default");


  // Filter Venues

  const filteredVenues = venues.filter((venue) => {

    const matchesSearch =
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTeam =
      teamFilter === "All" ||
      venue.team === teamFilter;

    return matchesSearch && matchesTeam;
  });


  // Sort Venues

  const sortedVenues = [...filteredVenues];

  switch (sortOption) {

    case "nameAsc":
      sortedVenues.sort(
        (a, b) => a.name.localeCompare(b.name)
      );
      break;

    case "capacity":
      sortedVenues.sort(
        (a, b) => b.capacity - a.capacity
      );
      break;

    case "matches":
      sortedVenues.sort(
        (a, b) => b.matches - a.matches
      );
      break;

    default:
      break;
  }


  return (

    <section className="venues-page">

      <SectionTitle
        title="IPL Venues"
        subtitle="Explore IPL stadiums, home grounds, capacities and venue characteristics."
      />


      {/* Controls */}

      <div className="venues-controls">

        <input
          type="text"
          placeholder="🔍 Search venue or city..."
          className="venues-search"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />


        <select
          className="venues-filter"
          value={teamFilter}
          onChange={(event) =>
            setTeamFilter(event.target.value)
          }
        >

          <option value="All">
            All Teams
          </option>

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


        <select
          className="venues-sort"
          value={sortOption}
          onChange={(event) =>
            setSortOption(event.target.value)
          }
        >

          <option value="default">
            🔄 Default
          </option>

          <option value="nameAsc">
            🔤 Name (A-Z)
          </option>

          <option value="capacity">
            🏟️ Largest Capacity
          </option>

          <option value="matches">
            🏏 Most Matches
          </option>

        </select>

      </div>


      {/* Venue Cards */}

      <div className="venues-grid">

        {sortedVenues.length > 0 ? (

          sortedVenues.map((venue) => (

            <div
              className="venue-card"
              key={venue.id}
            >

              <div className="venue-icon">
                🏟️
              </div>


              <div className="venue-content">

                <h2 className="venue-name">
                  {venue.name}
                </h2>

                <p className="venue-location">
                  📍 {venue.city}, {venue.state}
                </p>


                <span className="venue-team">
                  {venue.team}
                </span>


                <div className="venue-stats">

                  <div>
                    <span>Capacity</span>
                    <strong>
                      {venue.capacity.toLocaleString()}
                    </strong>
                  </div>

                  <div>
                    <span>IPL Matches</span>
                    <strong>
                      {venue.matches}
                    </strong>
                  </div>

                </div>


                <div className="venue-type">
                  {venue.type}
                </div>

              </div>

            </div>

          ))

        ) : (

          <div className="venue-no-results">

            <h2>🔍 No Venues Found</h2>

            <p>
              Try searching with another venue or city.
            </p>

          </div>

        )}

      </div>

    </section>

  );
}

export default Venues;