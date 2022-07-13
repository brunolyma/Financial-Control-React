import { Item } from "../ResumeItem/ResumeItem";

import * as R from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign} from 'react-icons/fa'

export function Resume({income, expense, total}) {
  return (
    <R.Container>
      <Item title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
      <Item title="Saída" Icon={FaRegArrowAltCircleDown} value={expense} />
      <Item title="Total" Icon={FaDollarSign} value={total} />
    </R.Container>
  );
}
