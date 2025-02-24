function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100 || 0);

  if (totalItems === 0) {
    return <footer className="stats">No items in your list</footer>;
  }

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>You're ready to go ✈️</p>
      ) : (
        <>
          You have {totalItems} items in your list, and you have packed{" "}
          {packedItems} ({percentage}%) items.
        </>
      )}
    </footer>
  );
}
export default Stats;
