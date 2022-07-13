import { GridItem } from "../GridItem/GridItem";
import * as G from "./styles";

export function Grid({ items, setItems }) {
  function onDelete(ID) {
    const newArray = items.filter((transaction) => transaction.id !== ID);
    setItems(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  }

  return (
    <G.Table>
      <G.Thead>
        <G.Tr>
          <G.Th width={40}>Descrição</G.Th>
          <G.Th width={40}>Valor</G.Th>
          <G.Th width={10} alignCenter>
            Tipo
          </G.Th>
          <G.Th width={10}></G.Th>
        </G.Tr>
      </G.Thead>
      <G.Tbody>
        {items?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </G.Tbody>
    </G.Table>
  );
}
