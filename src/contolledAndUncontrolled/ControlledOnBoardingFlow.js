import React from 'react';
export const ControlledOnBoardingFlow = ({ children, currentStep, onNext }) => {
  const currentChild = React.Children.toArray(children)[currentStep];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      gotoNext: (data) => {
        onNext(data);
      },
    });
  }

  return currentChild;
};
