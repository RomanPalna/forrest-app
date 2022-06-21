import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

export default function BackBtn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/non-alcohol");
  };

  return (
    <button className="forrest__coffee--backBtn" onClick={goBack}>
      <FiChevronLeft />
      Повернутися
    </button>
  );
}
