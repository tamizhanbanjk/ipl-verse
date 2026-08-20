import records from "../../data/Records";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Records.css";

function Records() {

  return (

    <section className="records-page">

      <SectionTitle
        title="IPL Records"
        subtitle="Explore some of the most impressive batting, bowling and team records in IPL history."
      />


      <div className="records-grid">

        {records.map((record) => (

          <div
            className="record-card"
            key={record.id}
          >

            <div className="record-icon">
              {record.icon}
            </div>


            <div className="record-content">

              <span className="record-category">
                {record.category}
              </span>

              <h2 className="record-player">
                {record.player}
              </h2>

              <span className="record-team">
                {record.team}
              </span>

              <div className="record-value">
                {record.value}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Records;