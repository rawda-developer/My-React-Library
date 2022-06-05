import { printProps } from './HOCs/printProps';
const MyComponent = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};
const MyComponentWrapper = printProps(MyComponent);
function App() {
  return (
    <>
      <MyComponentWrapper name='John' age='27' />
    </>
  );
}

export default App;
