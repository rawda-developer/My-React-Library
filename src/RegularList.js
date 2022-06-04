export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          {...{ [resourceName]: item }}
        />
      ))}
    </ul>
  );
};
