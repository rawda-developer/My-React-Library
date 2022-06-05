import { useState } from 'react';
import { UncontrolledOnBoardingFlow } from './contolledAndUncontrolled/UncontrolledOnBoardingFlow';
const Step1 = ({ gotoNext }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam nunc, eu aliquam nisl
        nisi eu nisl.
      </p>
      <button onClick={() => gotoNext('Step 1 Data')}>Next</button>
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
      <button onClick={() => gotoNext('Step 2 data')}>Next</button>
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
      <button onClick={() => gotoNext('Step 3 data')}>Next</button>
    </div>
  );
};
function App() {
  return (
    <>
      <UncontrolledOnBoardingFlow onFinish={() => alert('Onboarding complete')}>
        <Step1 />
        <Step2 />
        <Step3 />
      </UncontrolledOnBoardingFlow>
    </>
  );
}

export default App;
