import Dashboard from "./views/Dashboard";
import Clients from "./views/Clients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Directions from "./views/Directions";
import ClientsDetails from "./views/ClientsDetails";
import DirectionDetail from "./views/DirectionDetail";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Directions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
