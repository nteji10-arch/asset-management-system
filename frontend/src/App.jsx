import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddAsset from "./pages/AddAsset";
import EditAsset from "./pages/EditAsset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-asset" element={<AddAsset />} />
        <Route path="/edit-asset/:id" element={<EditAsset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;