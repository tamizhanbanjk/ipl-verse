

 import "./Home.css";

import { Link } from "react-router-dom";



function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>IPL Verse</h1>

        <h2>The Ultimate IPL Statistics & Analytics Platform</h2>

        <p>
          Explore IPL teams, players, stadiums, records, match history,
          statistics and much more — all in one place.
        </p>

        <div className="hero-buttons">

          

          <Link to="/players" className="home-btn primary">

                      Explore IPL

          </Link> 


          <Link to="/teams" className="home-btn secondary">

                       View Teams 

          </Link>





        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700"
          alt="Cricket"
        />
      </div>
    </section>
  );
}

export default Home;




    