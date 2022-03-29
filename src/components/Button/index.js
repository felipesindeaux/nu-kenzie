import "./index.css";

const Button = ({ children, onClick }) => (
  <button className="compButton" onClick={onClick}>
    {children}
  </button>
);

export default Button;
