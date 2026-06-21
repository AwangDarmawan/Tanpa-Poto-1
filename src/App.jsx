import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CoverPage from "./Pages/CoverPage";
import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import PesanAdminPage from "./Pages/PesanAdmin";





function App() {
 

  return (
    <>
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<AdminPage/>} />
               <Route path="/admin/pesan" element={<PesanAdminPage/>} />

               <Route path="/:nama" element={<CoverPage/>} />
              
             <Route path="/home" element={<HomePage />} />
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App
