import { useState } from "react";
import OtherAlcoList from "../../Drinks/otherAlco/OtherAlcoList";
import Modal from "../../Modal/Modal";
import shot from "../../../images/drinks/shot.svg";

export default function OtherAlco() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <li className="forrest__hotdrinks--item">
        <div
          className="forrest__hotdrinks--link"
          onClick={() => setModalActive(true)}
        >
          <img src={shot} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Інший Алкоголь</span>
        </div>
      </li>
      <Modal active={modalActive} setActive={setModalActive}>
        <OtherAlcoList />
      </Modal>
    </>
  );
}
