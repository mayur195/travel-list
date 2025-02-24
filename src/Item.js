function Item({ item, onItemDelete, onItemToggle }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onItemToggle(item.id);
        }}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity}{" "}
        {item.description
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </span>
      <button onClick={() => onItemDelete(item.id)}>❌</button>
    </li>
  );
}
export default Item;
