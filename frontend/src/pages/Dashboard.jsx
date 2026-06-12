import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      window.location.href = "/";
      return;
    }

    fetchAssets();
  }, []);

  const fetchAssets = async () => {
  try {
    const res = await API.get("assets/");
    setAssets(res.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  const deleteAsset = async (id) => {
    try {
      await API.delete(`assets/${id}/`);

      setAssets(
        assets.filter((asset) => asset.id !== id)
      );

      alert("Asset Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const availableAssets = assets.filter(
    (asset) => asset.status === "available"
  ).length;

  const assignedAssets = assets.filter(
    (asset) => asset.status === "assigned"
  ).length;

  const repairAssets = assets.filter(
    (asset) => asset.status === "repair"
  ).length;

  const filteredAssets = assets.filter((asset) => {
  const matchesSearch = asset.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "all" ||
    asset.status === statusFilter;

  return matchesSearch && matchesStatus;
});
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Asset Management Dashboard</h1>

          <button
            className="btn btn-danger"
            onClick={logout}
          >
            Logout
          </button>
        </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Total Assets</h5>
              <h2>{assets.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Available</h5>
              <h2>{availableAssets}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Assigned</h5>
              <h2>{assignedAssets}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
              <h5>Repair</h5>
              <h2>{repairAssets}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <a href="/add-asset" className="btn btn-primary">
          Add New Asset
        </a>
      </div>

      <input
        className="form-control mb-3"
        placeholder="Search Asset By Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="form-select mb-3"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All Assets</option>
        <option value="available">Available</option>
        <option value="assigned">Assigned</option>
        <option value="repair">Repair</option>
      </select>
      

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Serial Number</th>
            <th>Status</th>
            <th>Purchase Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredAssets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.id}</td>
              <td>{asset.name}</td>
              <td>{asset.type}</td>
              <td>{asset.serial_number}</td>
              <td>
  <span
    className={`badge ${
      asset.status === "available"
        ? "bg-success"
        : asset.status === "assigned"
        ? "bg-warning"
        : "bg-danger"
    }`}
  >
    {asset.status}
  </span>
</td>
              <td>{asset.purchase_date}</td>

              <td>
                <a
                  href={`/edit-asset/${asset.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </a>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                if (window.confirm("Delete this asset?")) {
                deleteAsset(asset.id);
                }
            }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
    </>
  );
}

export default Dashboard;