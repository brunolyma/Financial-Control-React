import * as I from "./styles";

export function Item({title, Icon, value}) {
  return (
    <I.Container>
      <I.Header>
        <I.HeaderTitle>{title}</I.HeaderTitle>
        <Icon />
      </I.Header>
      <I.Total>{value}</I.Total>
    </I.Container>
  );
}
