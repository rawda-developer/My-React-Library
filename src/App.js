import { useState } from 'react';
import { UncontrolledOnBoardingEvent } from './contolledAndUncontrolled/UncontrolledOnBoardingEvent';
const Step1 = ({ gotoNext }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam nunc, eu aliquam nisl
        nisi eu nisl.
      </p>
      <button onClick={gotoNext}>Next</button>
    </div>
  );
};

const Step2 = ({ gotoNext }) => {
  return (
    <div>
      <h1>Step 2</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam nunc, eu aliquam nisl
        nisi eu nisl.
      </p>
      <button onClick={gotoNext}>Next</button>
    </div>
  );
};
const Step3 = ({ gotoNext }) => {
  return (
    <div>
      <h1>Step 3</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam nunc, eu aliquam nisl
        nisi eu nisl.
      </p>
      <button onClick={gotoNext}>Next</button>
    </div>
  );
};
function App() {
  return (
    <>
      <UncontrolledOnBoardingEvent onFinish={() => console.log('Finished')}>
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrolledOnBoardingEvent>
    </>
  );
}

export default App;
