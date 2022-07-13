import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

import * as I from "./styles";

export function GridItem({ item, onDelete }) {
  
  return (
    <I.Tr>
      <I.Td>{item.desc}</I.Td>
      <I.Td>{item.amount}</I.Td>
      <I.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </I.Td>
      <I.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </I.Td>
    </I.Tr>
  );
}
