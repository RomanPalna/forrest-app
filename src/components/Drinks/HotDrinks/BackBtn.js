import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/non-alcohol");
  };

  return <button onClick={goBack}>Go Back</button>;
}
