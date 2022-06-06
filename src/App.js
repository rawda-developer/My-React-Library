import {
  Button,
  DangerButton,
  SuccessButton,
  WarningButton,
  smallDangerButton,
} from './FunctionalProgramming/Composition';
function App() {
  return (
    <>
      <Button color='red' text='Danger' />
      <Button color='green' text='Success' />
      <Button color='orange' text='Warning' />
      <smallDangerButton text='Small Danger' />
    </>
  );
}

export default App;
