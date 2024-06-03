import BodyLayout from "./components/BodyLayout";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CraeteNew from "./components/CraeteNew";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <>
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyLayout />} />
          <Route path="/create" element={<CraeteNew />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
