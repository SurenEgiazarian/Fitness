import Styled from './styledComponents';

export default ({ data }) => {
  const ColList = new Array();
  const colsNum = 3;

  for (let i = 0; i < colsNum; i++)
    ColList.push(<Column num={i+1} data={data[i]} key={i} />);

  const { Box } = Recommendation;
  return <Box>{ColList}</Box>;
};

const { Recommendation } = Styled;

const Column = ({ num, data }) => (
  <Recommendation.Column>
    <NumCircle Num={num} />
    <p>{data}</p>
  </Recommendation.Column>
);

const NumCircle = ({ Num }) => {
  const { NumCircle } = Recommendation;
  return (
    <NumCircle>
      <span>{Num}</span>
    </NumCircle>
  );
};
