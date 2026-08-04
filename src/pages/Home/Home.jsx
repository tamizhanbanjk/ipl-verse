import "./Home.css";
import Button from "../../components/Button/Button";

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

          <Button
            
            text = "Explore Now"
            variant = "primary"
          
          />   

          <Button
            
            text = "View Teams"
            variant = "secondary"
          
          />

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




    