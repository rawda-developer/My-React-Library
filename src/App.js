import { useState } from 'react';
import { ControlledModal } from './contolledAndUncontrolled/ControlledModal';

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <button onClick={() => setShouldShow(!shouldShow)}>
        {shouldShow ? 'Hide Form' : 'Show Form'}
      </button>
      {shouldShow && (
        <ControlledModal
          shouldShow={shouldShow}
          shouldShowControl={() => setShouldShow(!shouldShow)}
        >
          <h2>Hello world</h2>
        </ControlledModal>
      )}
    </>
  );
}

export default App;
