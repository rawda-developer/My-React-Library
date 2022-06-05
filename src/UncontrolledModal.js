import styled from 'styled-components';
import React from 'react';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 50%;
  margin: 10% auto;
  padding: 20px;
`;

export const UnControlledModal = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <ModalContainer onClick={() => setIsOpen(false)}>
          <ModalBody>
            <button onClick={() => setIsOpen(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalContainer>
      )}
    </>
  );
};
