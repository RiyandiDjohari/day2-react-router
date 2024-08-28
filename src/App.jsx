import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Media from "./components/Media";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Helpers from "./components/Helpers";

// Task:
// 1. Tambahkan Link ke masing" halaman dibawah
// 2. Buat komponen baru Login.jsx, jika belum login, maka redirect to login page
// Jika sudah login, redirect ke homepage

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/helpers" element={<Helpers />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/media" element={<Media />} />
            </Routes>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
