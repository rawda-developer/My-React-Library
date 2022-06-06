export const Button = ({ size, color, text, ...props }) => {
  const padding = size === 'small' ? '5px' : '10px';
  const fontSize = size === 'small' ? '12px' : '16px';

  return (
    <button
      style={{
        padding,
        fontSize,
        color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};
export const DangerButton = ({ text, ...props }) => (
  <Button color='red' text={text} {...props} />
);

export const SuccessButton = ({ text, ...props }) => (
  <Button color='green' text={text} {...props} />
);
export const WarningButton = ({ text, ...props }) => (
  <Button color='orange' text={text} {...props} />
);
export const smallDangerButton = ({ text, ...props }) => (
  <DangerButton size='small' text={text} {...props} />
);
