import React, { useState } from 'react';
export const UncontrolledOnBoardingEvent = ({ children, onFinish }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const currentChild = React.Children.toArray(children)[currentStep];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      gotoNext: (data) => {
        setData({ ...data });
        if (currentStep === children.length - 1) {
          onFinish(data);
        } else {
          setCurrentStep(currentStep + 1);
        }
        setData({
          ...data,
        });
        console.log(data);
      },
    });
  }

  return currentChild;
};
