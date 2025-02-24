import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onItemDelete, onItemToggle, ClearList }) {
  const [sortBy, setSorrtBy] = useState("byInput");
  let sortedItems = [...items];
  if (sortBy === "byName") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "byPackedStatus") {
    sortedItems.sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onItemDelete={onItemDelete}
            onItemToggle={onItemToggle}
            key={item.id}
          />
        ))}
      </ul>
      {items.length > 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSorrtBy(e.target.value)}>
            <option value="byName">Sort by Name</option>
            <option value="byPackedStatus">Sort by Packed Stats</option>
            <option value="byInput">Sort by Input Order</option>
          </select>
          <button onClick={ClearList}>Clear All</button>
        </div>
      ) : null}
    </div>
  );
}
export default PackingList;
