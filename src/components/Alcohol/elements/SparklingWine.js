import { useState } from "react";
import SparklingWineList from "../../Drinks/SparklingWine/SparklingWineList";
import Modal from "../../Modal/Modal";
import сhampagne from "../../../images/drinks/Champagne.svg";

export default function SparklingWine() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={сhampagne} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Ігристі Вина</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <SparklingWineList />
      </Modal>
    </>
  );
}
