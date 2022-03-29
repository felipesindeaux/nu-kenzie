import Button from "../Button";
import Card from "./Card";
import "./index.css";

const List = ({ formValues, renderList, setRenderList, setFormValues }) => {
  const render = (list) =>
    list.map((element) => (
      <Card
        descValue={element.descValue}
        valorValue={element.valorValue}
        tipoValue={element.tipoValue}
        key={element.descValue}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    ));

  const filterButton = (tipo) => {
    const listaFiltrada = formValues.filter((item) => item.tipoValue === tipo);

    setRenderList(listaFiltrada);
  };

  return (
    <>
      <div className="headerList">
        <span>Resumo financeiro</span>
        <div className="headerButtons">
          <Button onClick={() => setRenderList(formValues)}>Todos</Button>
          <Button onClick={() => filterButton("Entrada")}>Entradas</Button>
          <Button onClick={() => filterButton("Despesa")}>Dispesas</Button>
        </div>
      </div>
      <div className="cards">{render(renderList)}</div>
    </>
  );
};

export default List;
