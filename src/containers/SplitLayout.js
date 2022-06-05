import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Pane = styled.div`
  flex: ${(props) => props.weight};
  overflow: hidden;
`;
export const SplitLayout = ({ leftWeight, rightWeight, children }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
