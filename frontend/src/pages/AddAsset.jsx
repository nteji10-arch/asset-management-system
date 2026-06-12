import { useState } from "react";
import API from "../services/api";

function AddAsset() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    serial_number: "",
    status: "available",
    purchase_date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("assets/", form);
      alert("Asset Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to add asset");
    }
  };

  return (
    <div>
      <h2>Add Asset</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Asset Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="type"
          placeholder="Type"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="serial_number"
          placeholder="Serial Number"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="date"
          name="purchase_date"
          onChange={handleChange}
        />
        <br /><br />

        <select
          name="status"
          onChange={handleChange}
        >
          <option value="available">Available</option>
          <option value="assigned">Assigned</option>
          <option value="repair">Repair</option>
        </select>

        <br /><br />

        <button type="submit">
          Add Asset
        </button>
      </form>
    </div>
  );
}

export default AddAsset;