export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <ol>
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          {...{ [resourceName]: item }}
        />
      ))}
    </ol>
  );
};
