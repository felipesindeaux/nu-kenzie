import { FaTrash } from "react-icons/fa";

const Card = ({
  descValue,
  valorValue,
  tipoValue,
  formValues,
  setFormValues,
}) => {
  const classesCard = `card ${tipoValue}`;
  const iconStyle = {
    color: "#868E96",
    width: "9px",
    height: "9px",
    padding: "10px",
    background: "#E9ECEF",
    borderRadius: "2.46154px",
  };

  const retirarCard = () => {
    const cardClicado = formValues.find(
      (element) => element.descValue === descValue
    );
    const indexCardClicado = formValues.indexOf(cardClicado);

    formValues.splice(indexCardClicado, 1);
    setFormValues([...formValues]);
  };

  return (
    <div className={classesCard}>
      <div className="flex__card">
        <h3>{descValue}</h3>
        <span>{tipoValue}</span>
      </div>

      <div className="preco__card">
        <span>
          {Number(valorValue).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <FaTrash
          style={iconStyle}
          onMouseOver={({ target }) => {
            target.style.background = "#868E96";
            target.style.color = "#F8F9FA";
          }}
          onMouseOut={({ target }) => {
            target.style.backgroundColor = "#E9ECEF";
            target.style.color = "#868E96";
          }}
          onClick={() => retirarCard()}
        ></FaTrash>
      </div>
    </div>
  );
};

export default Card;
