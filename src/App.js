import { RecursiveComponent } from './FunctionalProgramming/RecursiveComponent';

const nestedObject = {
  a: 1,
  b: {
    b1: {
      b11: 1,
      b12: 2,
    },
    b2: {
      b21: 1,
      message: 'Hi',
      b22: {
        b221: 1,
      },
    },
  },
  c: {
    c1: 1,
    c2: 2,
    c3: {
      c31: 1,
      c32: 2,
    },
  },
};
function App() {
  return (
    <>
      <RecursiveComponent data={nestedObject} />
    </>
  );
}

export default App;
