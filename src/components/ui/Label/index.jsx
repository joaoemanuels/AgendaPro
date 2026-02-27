import "./label.styles.css";

export function Label({ children, ...rest }) {
  return (
    <label className="label" {...rest}>
      {children}
    </label>
  );
}
