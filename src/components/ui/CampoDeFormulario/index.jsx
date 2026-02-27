import "./campo-formulario.styles.css";

export function CampoDeFormulario({ children, ...rest }) {
  return (
    <fieldset className="form-group" {...rest}>
      {children}
    </fieldset>
  );
}
