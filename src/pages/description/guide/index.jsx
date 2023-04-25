import Styled from './styledComponents';

import SuitableFor from './suitableFor';
import Directions from './directions';

export default ({ data: { description, directions, suitableFor } }) => {
  const { Wrapper } = Styled;
  const { Section } = Styled;
  return (
    <Wrapper>
      <Section>
        <h2>Подойдет для вас, если:</h2>
        <SuitableFor data={suitableFor} />
      </Section>

      <Section>
        <h2>Направления:</h2>
        <Directions data={directions} />
      </Section>

      <Section>
        <p>{description}</p>
      </Section>
    </Wrapper>
  );
};
