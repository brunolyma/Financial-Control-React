import { useState } from "react";
import { Grid } from "../Grid/Grid";
import * as F from "./styles";

export function Form({ handleAdd, transactionList, setTransactionList }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpensive, setIsExpensive] = useState("");

  const generateId = () => Math.round(Math.random() * 1000);

  function handleSave() {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo");
      return;
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpensive,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  }

  return (
    <>
      <F.Container>
        <F.InputContent>
          <F.Label>Descrição</F.Label>
          <F.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </F.InputContent>
        <F.InputContent>
          <F.Label>Valor</F.Label>
          <F.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </F.InputContent>
        <F.RadioGroup>
          <F.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpensive(!isExpensive)}
          />
          <F.Label htmlFor="rIncome">Entrada</F.Label>
          <F.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setIsExpensive(!isExpensive)}
          />
          <F.Label htmlFor="rExpenses">Saída</F.Label>
        </F.RadioGroup>
        <F.Button onClick={handleSave}>ADICIONAR</F.Button>
      </F.Container>
      <Grid items={transactionList} setItems={setTransactionList}/>
    </>
  );
}
