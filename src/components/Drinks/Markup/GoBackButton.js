import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  let navigate = useNavigate();

  return (
    <button className="back__button" onClick={() => navigate(-1)}>
      <GoChevronLeft fill={"#E4E4E4"} />
    </button>
  );
}
