

console.log("Players.jsx Loaded");

import players from "../../data/players";

import PlayerCard from "../../components/PlayerCard/PlayerCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Players.css";
import { useState } from "react";

import useLocalStorage from "../../hooks/useLocalStorage";

function Players() {

 const [searchTerm, setSearchTerm] = useState("");

 const [teamFilter, setTeamFilter] = useState("All");

 const [roleFilter, setRoleFilter] = useState("All");

 const [sortOption, setSortOption] = useState("default");

 const [favoritePlayers, setFavoritePlayers] =
        useLocalStorage("favoritePlayers", []);

 
 const filteredPlayers = players.filter((player) => {

    const matchesSearch = player.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesTeam =
        teamFilter === "All" || player.team === teamFilter;

        const matchesRole =
    roleFilter === "All" || player.role === roleFilter;

    return matchesSearch && matchesTeam  && matchesRole;

});



const sortedPlayers = [...filteredPlayers];

switch (sortOption) {
  case "nameAsc":
        sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        break;

    case "nameDesc":
        sortedPlayers.sort((a, b) => b.name.localeCompare(a.name));
        break;

    case "runs":
        sortedPlayers.sort((a, b) => b.runs - a.runs);
        break;

    case "wickets":
        sortedPlayers.sort((a, b)=> b.wickets - a.wickets)  
        break;  

    case "youngest":
        sortedPlayers.sort((a, b) => a.age - b.age);
        break;

    case "oldest":
        sortedPlayers.sort((a, b) => b.age - a.age);
        break;


    default:
        break;
    
}


        const toggleFavorite = (playerId) => {
             console.log("Clicked:", playerId);
        if (favoritePlayers.includes(playerId)) {
            setFavoritePlayers(
            favoritePlayers.filter((id) => id !== playerId)
        );}

        else {
        setFavoritePlayers([
            ...favoritePlayers,
            playerId
        ]);}
};
 


    return (

        <section className="players-page">

            <SectionTitle
                title="IPL Players"
                subtitle="Explore player profiles, batting records, bowling statistics and career achievements."
            />

                             {/* Search Box */}

        <div className="controls-section">

             <div className="search-section">

                <input
                    type="text"
                    placeholder="🔍 Search players..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />

            </div>

                          {/* Teams     Filter    Box */}

            <div className="filter-section">

              <select
                 className="filter-select"
                  value={teamFilter}
                 onChange={(event) => setTeamFilter(event.target.value)}
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

                      {/* Roles    Filter    Box  */}

            <div>

              <select
                 className="filter-select"
                 value={roleFilter}
                 onChange={(event) => setRoleFilter(event.target.value)}
              >

                   <option value="All">All Roles</option>
                   <option value="Batsman">Batsman</option>
                   <option value="Bowler">Bowler</option>
                   <option value="All-Rounder">All-Rounder</option>
                   <option value="Wicket Keeper">Wicket Keeper</option>

              </select>

            </div>

              {/*   Sorted   BY      Name,     Age,    Runs,    Wickets,   Youngest,   Oldest   */}

            <div className="sort-section">
                <select
                    className="sort-select"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="default">🔄 Default</option>
                    <option value="nameAsc">🔤 Name (A-Z)</option>
                    <option value="nameDesc">🔤 Name (Z-A)</option>
                    <option value="runs">🏆 Most Runs</option>
                    <option value="wickets"> Most Wickets</option>
                    <option value="youngest">📅 Youngest Players</option>
                    <option value="oldest">📅 Oldest Players</option>

                </select>

            </div>

        </div>

            <div className="players-grid">

    {filteredPlayers.length > 0 ? (

        sortedPlayers.map((player) => (

            <PlayerCard
                key={player.id}
                player={player}
                isFavorite={favoritePlayers.includes(player.id)}
                onToggleFavorite={toggleFavorite}
            />

        ))

    ) : (

        <div className="no-results">
            <h2>🔍 No Players Found</h2>
            <p>Try searching with another player name.</p>
        </div>

    )}

          </div>

        </section>

    );

}

export default Players;