import { Route, Routes } from "react-router";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import GreekAlphabet from "./pages/GreekAlphabet";
import Learn from "./pages/Learn";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/greek-alphabet" element={<GreekAlphabet />} />
        <Route path="/learn" element={<Learn />} />
      </Route>
    </Routes>
  );
}

export default App;