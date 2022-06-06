export const PartiallyApply = (Component, partialProps) => {
  return (props) => <Component {...partialProps} {...props} />;
};
export const Button = ({ size, color, text, ...props }) => {
  const padding = size === 'small' ? '5px' : '10px';
  const fontSize = size === 'small' ? '12px' : '16px';

  return (
    <button
      style={{
        padding,
        fontSize,
        color,
        backgroundColor: 'white',
      }}
      {...props}
    >
      {text}
    </button>
  );
};
export const DangerButton = PartiallyApply(Button, {
  color: 'red',
});
export const SuccessButton = PartiallyApply(Button, {
  color: 'green',
});
export const WarningButton = PartiallyApply(Button, {
  color: 'orange',
});
