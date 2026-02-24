import "./submit-button.styles.css";

function SubmitButton({ children }) {
  return (
    <div className="container-submitBtn">
      <img src="../../../" alt="" />
      <button type="submit" className="submitBtn">
        {children}
      </button>
    </div>
  );
}

export default SubmitButton;
