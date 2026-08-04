import "./InfoRow.css";

function InfoRow({ label, value, icon }) {
  return (
    <div className="info-row">

      <div className="info-label">
        <span className="info-icon">
          {icon}
        </span>

        <strong>{label}</strong>
      </div>

      <span className="info-value">
        {value}
      </span>

    </div>
  );
}

export default InfoRow;