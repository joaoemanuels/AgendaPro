import "./heading-section.styles.css";

function HeadingSection({ children }) {
  return (
    <div className="heading-section">
      <h2>{children}</h2>
    </div>
  );
}

export default HeadingSection;
