import * as s from './TasksStyle';
import { Button } from '../commonComponents/button/button';

export default function Tasks({ onClick, tasks }) {
  const items = Object.keys(tasks).map((item) => (
    <s.Item key={item.toString()}>{item}</s.Item>
  ));
  return (
    <s.Container>
      <s.Title>Упражнения</s.Title>
      <s.Content>{items}</s.Content>
      <Button.s18.blue width="275px" onClick={onClick}>
        Заполнить свой прогресс
      </Button.s18.blue>
    </s.Container>
  );
}
