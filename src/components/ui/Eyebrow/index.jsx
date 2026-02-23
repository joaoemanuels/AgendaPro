import "./eyebrow.styles.css";
import CheckRed from "@/assets/icons/check-read.svg";

function Eyebrow() {
  return (
    <div className="eyebrow">
      <img src={CheckRed} alt="icone" />
      <span>Since - 1998</span>
    </div>
  );
}

export default Eyebrow;
