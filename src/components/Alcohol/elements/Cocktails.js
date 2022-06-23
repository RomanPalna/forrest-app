import { useState } from "react";
import CocktailList from "../../Drinks/Cocktails/CotailList";
import Modal from "../../Modal/Modal";
import cocktail from "../../../images/drinks/Cocktail.svg";

export default function Cocktails() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={cocktail} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Коктейлі</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <CocktailList />
      </Modal>
    </>
  );
}
