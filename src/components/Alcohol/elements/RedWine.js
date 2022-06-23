import { useState } from "react";
import RedWineList from "../../Drinks/RedWine/RedWineList";
import Modal from "../../Modal/Modal";
import redWine from "../../../images/drinks/redWine.svg";

export default function RedWine() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={redWine} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Червоні вина</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <RedWineList />
      </Modal>
    </>
  );
}
