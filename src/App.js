import "./App.css";
import logo from "./images/nuKenzie.png";
import Button from "./components/Button";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {
  const [formValues, setFormValues] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [renderList, setRenderList] = useState([]);
  const [descValue, setDescValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [tipoValue, setTipoValue] = useState("");

  const calcularPrecoTotal = () => {
    const precoCalculado = formValues.reduce((acc, currValue) => {
      if (currValue.tipoValue === "Entrada") {
        return acc + Number(currValue.valorValue);
      } else {
        return acc - Number(currValue.valorValue);
      }
    }, 0);

    setPrecoTotal(
      precoCalculado.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      })
    );
  };

  const changeFormValues = (value) => {
    setFormValues(value);
  };

  const changeRenderList = (value) => {
    setRenderList(value);
  };

  const changeDescValue = (value) => {
    setDescValue(value);
  };

  const changeValorValue = (value) => {
    setValorValue(value);
  };

  const changeTipoValue = (value) => {
    setTipoValue(value);
  };

  useEffect(() => {
    calcularPrecoTotal();
    setRenderList(formValues);
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <div className="horizontalLine">
          <img src={logo} alt="Logo" />
          <Button>Inicio</Button>
        </div>
      </header>
      <div className="container">
        <aside>
          <Form
            setFormValues={changeFormValues}
            formValues={formValues}
            setRenderList={changeRenderList}
            descValue={descValue}
            setDescValue={changeDescValue}
            valorValue={valorValue}
            setValorValue={changeValorValue}
            tipoValue={tipoValue}
            setTipoValue={changeTipoValue}
          />
          <TotalMoney formValues={formValues} precoTotal={precoTotal} />
        </aside>
        <main>
          <List
            formValues={formValues}
            renderList={renderList}
            setRenderList={changeRenderList}
            setFormValues={changeFormValues}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
