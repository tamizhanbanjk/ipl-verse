import { useParams, Link } from "react-router-dom";
import players from "../../data/players";

import "./Playerdetails.css";

function Playerdetails() {

    const { id } = useParams();

    const player = players.find(
        (player) => player.id === Number(id)
    );

    if (!player) {
        return (
            <section className="player-details-page">

                <div className="player-not-found">

                    <h1>Player Not Found</h1>

                    <p>
                        Sorry, we couldn't find the player you are looking for.
                    </p>

                    <Link to="/players" className="back-btn">
                        ← Back to Players
                    </Link>

                </div>

            </section>
        );
    }

    return (

        <section className="player-details-page">

            {/* Back Button */}

            <Link to="/players" className="back-btn">
                ← Back to Players
            </Link>


            {/* Player Header */}

            <div className="player-details-card">

                <div className="player-details-image">

                    <div className="details-placeholder">
                        🏏
                    </div>

                </div>


                <div className="player-details-info">

                    <span className="details-team">
                        {player.team}
                    </span>

                    <h1>{player.name}</h1>

                    <p className="details-role">
                        {player.role}
                    </p>

                    {player.isCaptain && (
                        <span className="captain-badge">
                            ⭐ Team Captain
                        </span>
                    )}

                </div>

            </div>


            {/* Personal Information */}

            <div className="details-section">

                <h2>Personal Information</h2>

                <div className="details-grid">

                    <div className="detail-item">
                        <span>Age</span>
                        <strong>{player.age}</strong>
                    </div>

                    <div className="detail-item">
                        <span>Nationality</span>
                        <strong>{player.nationality}</strong>
                    </div>

                    <div className="detail-item">
                        <span>Role</span>
                        <strong>{player.role}</strong>
                    </div>

                    <div className="detail-item">
                        <span>Team</span>
                        <strong>{player.team}</strong>
                    </div>

                </div>

            </div>


            {/* Playing Style */}

            <div className="details-section">

                <h2>Playing Style</h2>

                <div className="details-grid">

                    <div className="detail-item">

                        <span>Batting Style</span>

                        <strong>
                            {player.battingStyle}
                        </strong>

                    </div>

                    <div className="detail-item">

                        <span>Bowling Style</span>

                        <strong>
                            {player.bowlingStyle}
                        </strong>

                    </div>

                </div>

            </div>


            {/* Career Statistics */}

            <div className="details-section">

                <h2>IPL Career Statistics</h2>

                <div className="stats-grid">

                    <div className="career-stat">
                        <span>Matches</span>
                        <strong>{player.matches}</strong>
                    </div>

                    <div className="career-stat">
                        <span>Runs</span>
                        <strong>{player.runs}</strong>
                    </div>

                    <div className="career-stat">
                        <span>Wickets</span>
                        <strong>{player.wickets}</strong>
                    </div>

                    <div className="career-stat">
                        <span>Strike Rate</span>
                        <strong>{player.strikeRate}</strong>
                    </div>

                    <div className="career-stat">
                        <span>Average</span>
                        <strong>{player.average}</strong>
                    </div>

                </div>

            </div>

        </section>

    );
}

export default Playerdetails;