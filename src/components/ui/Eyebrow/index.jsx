import "./eyebrow.styles.css";
import CheckRed from "@/assets/icons/check-read.svg";

function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <img src={CheckRed} alt="icone" />
      <span>{children}</span>
    </div>
  );
}

export default Eyebrow;
