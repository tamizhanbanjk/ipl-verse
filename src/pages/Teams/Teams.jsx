
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import teams from "../../data/teams";
import TeamCard from "../../components/Teamcard/TeamCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Teams.css";

import { motion } from "framer-motion";


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

   

function Teams() {

    const [searchTerm, setSearchTerm] = useState("");

    const [titleFilter, setTitleFilter] = useState(0);

    const [sortOption, setSortOption] = useState("default");

    const [favoriteTeams, setFavoriteTeams] =
        useLocalStorage("favoriteTeams", []);

   
    const filteredTeams = teams.filter((team) => {
    const matchesSearch = team.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesTitle =
        titleFilter === 0 || team.titles >= titleFilter;

    return matchesSearch && matchesTitle;
});

    const sortedTeams = [...filteredTeams];

    switch (sortOption) {
    case "nameAsc":
        sortedTeams.sort((a, b) => a.name.localeCompare(b.name));
        break;

    case "nameDesc":
        sortedTeams.sort((a, b) => b.name.localeCompare(a.name));
        break;

    case "titles":
        sortedTeams.sort((a, b) => b.titles - a.titles);
        break;

    case "oldest":
        sortedTeams.sort((a, b) => a.founded - b.founded);
        break;

    case "newest":
        sortedTeams.sort((a, b) => b.founded - a.founded);
        break;

    default:
        break;
}

    const toggleFavorite = (teamId) => {
        if (favoriteTeams.includes(teamId)) {
            setFavoriteTeams(
            favoriteTeams.filter((id) => id !== teamId)
        );}

        else {
        setFavoriteTeams([
            ...favoriteTeams,
            teamId
        ]);}
};

    return (
        

        <section className="teams-page">

            <SectionTitle
                title="IPL Teams"
                subtitle="Explore all IPL Teams, Captains, Coaches, Home Venues and Championship Titles."

            />

            {/* Search Box */}
            <div className="controls-section">

            <div className="search-section">

                <input
                    type="text"
                    placeholder="🔍 Search teams..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />

            </div>


            <div className="filter-section">
                <select
                    className="filter-select"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(Number(e.target.value))}>
    
                    <option value="0">All Teams</option>
                    <option value="1">1+ Titles</option>
                    <option value="3">3+ Titles</option>
                    <option value="5">5+ Titles</option>
                </select>
            </div>

            <div className="sort-section">
                <select
                    className="sort-select"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
    >
                    <option value="default">🔄 Default</option>
                    <option value="nameAsc">🔤 Name (A-Z)</option>
                    <option value="nameDesc">🔤 Name (Z-A)</option>
                    <option value="titles">🏆 Most Titles</option>
                    <option value="oldest">📅 Oldest Team</option>
                    <option value="newest">📅 Newest Team</option>
                </select>
            </div>
            
            </div>

            {/* Team Cards */}

            <motion.div 
                 className="teams-grid"
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"

            >
                  {sortedTeams.length > 0 ? (
                  sortedTeams.map((team) => (
          
                    <TeamCard
                       key={team.id}
                       team={team}
                       isFavorite={favoriteTeams.includes(team.id)}
                       onToggleFavorite={toggleFavorite}
                    />
         ))

      ) : (

                <div className="no-results">
                   <h2>🔍 No Teams Found</h2>
                   <p>Try searching with another team name.</p>
                </div>
      )}

            </motion.div>

        </section>

    );

}

export default Teams;