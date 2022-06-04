import { Left, Right } from './App';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Pane = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`;
export const SplitLayout = ({ left: Left, right: Right }) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
