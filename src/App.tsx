import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomerLayout } from "./components/Layout/CustomerLayout/CustomerLayout";
import { ExecutorLayout } from "./components/Layout/ExecutorLayout/ExecutorLayout";
import { ExecutorPage } from "./pages/ExecutorPage/ExecutorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<div>Main costumer</div>} />
        </Route>
        <Route path="/executor" element={<ExecutorLayout />}>
          <Route index element={<ExecutorPage />} />
          <Route path="main" element={<div>main</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
