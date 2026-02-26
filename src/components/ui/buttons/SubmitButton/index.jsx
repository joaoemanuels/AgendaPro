import "./submit-button.styles.css";

function SubmitButton({ children, onClick, type = "button" }) {
  return (
    <div className="container-submitBtn">
      <button type={type} className="submitBtn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default SubmitButton;
