import { useState } from "react";
import Modal from "../../Modal/Modal";
import ColdDrink from "../../../images/drinks/Glass.svg";
import ColdDrinksList from "../../Drinks/ColdDrinks/ColdDrinks";

export default function ColdDrinks() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={ColdDrink} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Холодні напої</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <ColdDrinksList />
      </Modal>
    </>
  );
}
