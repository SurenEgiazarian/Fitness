import * as s from './TasksProgressStyle';

const colors = [
  { fill: '#565EEF', bcg: '#EDECFF' },
  { fill: '#FF6D00', bcg: '#FFF2E0' },
  { fill: '#9A48F1', bcg: '#F9EBFF' },
  { fill: '#00C90D', bcg: '#e6fae7' },
  { fill: '#E40045', bcg: '#fce6ec' },
];

export default function TasksProgress({ tasks }) {
  const getWidth = (item, done) => {
    const goal = parseInt(item.match(/\d+/), 10);
    if ((done / goal) * 100 < 100) {
      return `${Math.floor((done / goal) * 100)}%`;
    }
    return '100%';
  };

  const getJustify = (item, done) => {
    const goal = parseInt(item.match(/\d+/), 10);
    if ((done / goal) * 100 < 16) {
      return 'flex-start';
    }
    return 'center';
  };

  const items = Object.entries(tasks).map(([item, value], index) => (
    <s.Item key={item.toString()}>
      <s.ItemText>{item.split('(')[0]}</s.ItemText>
      <s.ItemProgress
        style={{
          background: colors[index].bcg,
          border: `2px solid ${colors[index].fill}`,
        }}
      >
        <s.ItemProgressFill
          style={{
            background: colors[index].fill,
            width: getWidth(item, value.done),
            justifyContent: getJustify(item, value.done),
          }}
        >
          {getWidth(item, value.done)}
        </s.ItemProgressFill>
      </s.ItemProgress>
    </s.Item>
  ));
  return (
    <s.Container>
      <s.Title>Мой прогресс по тренировке:</s.Title>
      <s.Content>{items}</s.Content>
    </s.Container>
  );
}
