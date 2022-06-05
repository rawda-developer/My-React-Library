import React, { useState } from 'react';
export const UncontrolledOnBoardingEvent = ({ children, gotoNext }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});

  const currentChild = React.Children.toArray(children)[currentStep];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      gotoNext: (data) => {
        setData({ ...data });
        if (currentStep === children.length - 1) {
          gotoNext(data);
        } else {
          setCurrentStep(currentStep + 1);
        }
      },
    });
  }

  return currentChild;
};
