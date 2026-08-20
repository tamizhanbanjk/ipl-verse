import matches from "../../data/Matches";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Matches.css";

function Matches() {
  return (
    <section className="matches-page">

      <SectionTitle
        title="IPL Matches"
        subtitle="Explore IPL match schedules, venues, results and upcoming fixtures."
      />

      <div className="matches-grid">

        {matches.map((match) => (
          <div className="match-card" key={match.id}>

            <div className="match-header">
              <span>{match.date}</span>
              <span>{match.time}</span>
            </div>

            <div className="teams-row">

              <div className="match-team">
                <div className="team-circle">
                  {match.team1}
                </div>

                <strong>{match.team1}</strong>
              </div>

              <div className="vs">
                VS
              </div>

              <div className="match-team">
                <div className="team-circle">
                  {match.team2}
                </div>

                <strong>{match.team2}</strong>
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
        ))}

      </div>

    </section>
  );
}

export default Matches;