import { useState } from 'react';
import { ControlledOnBoardingFlow } from './contolledAndUncontrolled/ControlledOnBoardingFlow';
const Step1 = ({ gotoNext }) => {
  return (
    <div>
      <h1>Step 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam nunc, eu aliquam nisl
        nisi eu nisl.
      </p>
      <button onClick={() => gotoNext({ hairColor: 'brown' })}>Next</button>
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
      <button onClick={() => gotoNext({ name: 'Joan B' })}>Next</button>
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
      <button onClick={() => gotoNext({ age: 60 })}>Next</button>
    </div>
  );
};
const Step4 = ({ gotoNext }) => {
  return (
    <div>
      <h1>Step 4</h1>
      <p>Congratulations you're a senior</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate,
        ipsum eu dignissim consectetur, nisi nisl aliquam nunc, eu aliquam nisl
        nisi eu nisl.
      </p>
      <button onClick={() => gotoNext({})}>Next</button>
    </div>
  );
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [onBoardingData, setOnBoardingData] = useState({});
  const onNext = (data) => {
    setCurrentStep(currentStep + 1);
    setOnBoardingData({ ...onBoardingData, ...data });
    console.log(onBoardingData);
  };
  return (
    <>
      <ControlledOnBoardingFlow currentStep={currentStep} onNext={onNext}>
        <Step1 />
        <Step2 />
        <Step3 />
        {onBoardingData.age >= 50 && <Step4 />}
      </ControlledOnBoardingFlow>
    </>
  );
}

export default App;
