import { Link } from "react-router-dom";

import shot from "../../../images/drinks/shot.svg";

export default function Gorilka() {
  return (
    <>
      <Link to="/gorilka" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={shot} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Горілка</span>
        </div>
      </Link>
    </>
  );
}
