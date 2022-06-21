import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/non-alcohol");
  };

  return (
    <button className="forrest__coffee--backBtn" onClick={goBack}>
      Go Back
    </button>
  );
}
