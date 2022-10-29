import { Link } from "react-router-dom";
import glass from "../../../images/drinks/Glass.svg";
import cognac from "../../../images/drinks/cognac.svg";
import cocktail from "../../../images/drinks/Cocktail.svg";
import shot from "../../../images/drinks/shot.svg";
import redWine from "../../../images/drinks/redWine.svg";
import сhampagne from "../../../images/drinks/Champagne.svg";
import whiskey from "../../../images/drinks/whiskey.svg";
import whiteWine from "../../../images/drinks/whiteWine.svg";
import glassWine from "../../../images/drinks/glassWine.svg";

const ROUTES = [
  ["/beer", glass, "Пиво"],
  ["/cocktails", cocktail, "Фірмові Коктейлі"],
  ["/brandy-cognac", cognac, "Коньяк, Бренді"],
  ["/whisky", whiskey, "Віскі"],
  ["/gorilka", shot, "Горілка"],
  ["/other-alco", shot, "Інший Алкоголь"],
  ["/sparkling-wine", сhampagne, "Ігристі Вина"],
  ["/white-wine", whiteWine, "Білі Вина"],
  ["/red-wine", redWine, "Червоні вина"],
  ["/glass-wine", glassWine, "Вино розлив"],
];

export default function Alcohol() {
  return (
    <div className="drinks__container">
      <fieldset className="fieldset">
        <legend>Алкоголь</legend>

        <ul className="forrest__hotdrinks">
          {ROUTES.map(([route, img, name]) => (
            <Link to={route} key={route} className="forrest__hotdrinks--item">
              <div className="forrest__hotdrinks--link">
                <img src={img} alt="hot drinks" width="35" height="30" />
                <span className="forrest__hotdrinks--text">{name}</span>
              </div>
            </Link>
          ))}
        </ul>
      </fieldset>
    </div>
  );
}
