import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./About.css";

function About() {

  return (

    <section className="about-page">

      <SectionTitle
        title="About IPL Verse"
        subtitle="Your interactive destination for exploring IPL teams, players, matches, statistics and records."
      />


      {/* ================= Introduction ================= */}

      <div className="about-intro">

        <div className="about-icon">
          🏏
        </div>

        <div className="about-intro-content">

          <h2>
            What is IPL Verse?
          </h2>

          <p>
            IPL Verse is a modern web application designed to
            provide an interactive and organized way to explore
            information about the Indian Premier League.
          </p>

          <p>
            The application brings players, teams, matches,
            points tables, records, venues and player comparisons
            together in one easy-to-use platform.
          </p>

        </div>

      </div>


      {/* ================= Features ================= */}

      <div className="about-section">

        <h2>
          What You Can Explore
        </h2>

        <div className="about-features">

          <div className="about-feature-card">

            <div className="feature-icon">
              👤
            </div>

            <h3>
              Players
            </h3>

            <p>
              Explore player profiles, roles, teams and
              career statistics.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              🏆
            </div>

            <h3>
              Teams
            </h3>

            <p>
              Discover IPL teams, captains, coaches,
              home grounds and titles.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              📅
            </div>

            <h3>
              Matches
            </h3>

            <p>
              Explore match schedules, venues, results
              and upcoming fixtures.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Statistics
            </h3>

            <p>
              Analyze points tables, records and player
              statistics.
            </p>

          </div>

        </div>

      </div>


      {/* ================= Key Features ================= */}

      <div className="about-section">

        <h2>
          Key Features
        </h2>

        <div className="features-list">

          <div>
            🔍
            <span>
              Search and filter players, teams and matches
            </span>
          </div>

          <div>
            🔄
            <span>
              Sort data using multiple statistical options
            </span>
          </div>

          <div>
            ⭐
            <span>
              Save favorite players and teams
            </span>
          </div>

          <div>
            ⚔️
            <span>
              Compare players side by side
            </span>
          </div>

          <div>
            📱
            <span>
              Responsive interface for different screen sizes
            </span>
          </div>

          <div>
            🧭
            <span>
              Easy navigation between IPL information
            </span>
          </div>

        </div>

      </div>


      {/* ================= Technologies ================= */}

      <div className="about-section">

        <h2>
          Technologies Used
        </h2>

        <div className="technology-list">

          <span>HTML5</span>

          <span>CSS3</span>

          <span>JavaScript</span>

          <span>React.js</span>

          <span>React Router</span>

          <span>Local Storage</span>

          <span>Framer Motion</span>

        </div>

      </div>


      {/* ================= Project Purpose ================= */}

      <div className="about-purpose">

        <h2>
          Project Purpose
        </h2>

        <p>
          IPL Verse was developed as a frontend web development
          project to demonstrate the practical use of React.js,
          component-based architecture, state management,
          routing, filtering, sorting and responsive UI design.
        </p>

        <p>
          The project focuses on creating a user-friendly
          experience while organizing IPL-related information
          into reusable and interactive components.
        </p>

      </div>

    </section>

  );

}

export default About;