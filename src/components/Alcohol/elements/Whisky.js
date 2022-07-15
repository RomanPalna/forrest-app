import whiskey from "../../../images/drinks/whiskey.svg";
import { Link } from "react-router-dom";

export default function Whisky() {
  return (
    <>
      <Link to="/whisky" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={whiskey} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Віскі</span>
        </div>
      </Link>
    </>
  );
}
