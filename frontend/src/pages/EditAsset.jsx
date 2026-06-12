import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function EditAsset() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    type: "",
    serial_number: "",
    status: "",
    purchase_date: "",
  });

  useEffect(() => {
    fetchAsset();
  }, []);

  const fetchAsset = async () => {
    const res = await API.get(`assets/${id}/`);
    setForm(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateAsset = async (e) => {
    e.preventDefault();

    await API.put(`assets/${id}/`, form);

    alert("Asset Updated Successfully");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h1>Edit Asset</h1>

      <form onSubmit={updateAsset}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="type"
          value={form.type}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="serial_number"
          value={form.serial_number}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="purchase_date"
          value={form.purchase_date}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="available">Available</option>
          <option value="assigned">Assigned</option>
          <option value="repair">Repair</option>
        </select>

        <br /><br />

        <button type="submit">
          Update Asset
        </button>
      </form>
    </div>
  );
}

export default EditAsset;