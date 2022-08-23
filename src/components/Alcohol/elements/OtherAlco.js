import { Link } from "react-router-dom";
import shot from "../../../images/drinks/shot.svg";

export default function OtherAlco() {
  return (
    <>
      <Link to="/other-alco" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={shot} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Інший Алкоголь</span>
        </div>
      </Link>
    </>
  );
}
