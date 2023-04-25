import Styled from './styledComponents';

export default ({ data }) => {
  const ColList = new Array();
  const colsNum = 3;

  for (let i = 0; i < colsNum; i++) {
    const itemList = new Array();
    for (let j = 0; j < 3; j++) {
      const item = data[i * 3 + j];
      itemList[j] = item || null;
    }
    ColList.push(<Column data={itemList} key={i} />);
  }

  const { Box } = Styled.CourseList;
  return <Box>{ColList}</Box>;
};

const Column = ({ data }) => {
  const ItemList = new Array();
  const itemsNum = data.length;

  for (let i = 0; i < itemsNum; i++)
    if (data[i]) ItemList.push(<li key={i}>{data[i]}</li>);

  const { Column } = Styled.CourseList;
  return (
    <Column>
      <ul>
        <p>{ItemList}</p>
      </ul>
    </Column>
  );
};
