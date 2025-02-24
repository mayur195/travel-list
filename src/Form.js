import { useState } from "react";

function Form({ onAddItems }) {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) {
      alert("Please enter an item.");
      return;
    }

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);

    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for yout trip? </p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
