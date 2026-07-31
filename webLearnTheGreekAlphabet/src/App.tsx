import { Route, Routes } from "react-router";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import GreekAlphabet from "./pages/GreekAlphabet";
import Learn from "./pages/Learn";
import Lesson1 from "./pages/lessons/Lesson1"
import Lesson2 from "./pages/lessons/Lesson2";
import Lesson3 from "./pages/lessons/Lesson3";
import Lesson4 from "./pages/lessons/Lesson4";
import Lesson5 from "./pages/lessons/Lesson5";
import Lesson6 from "./pages/lessons/Lesson6";
import Lesson7 from "./pages/lessons/Lesson7";
import Lesson8 from "./pages/lessons/Lesson8";
import Lesson9 from "./pages/lessons/Lesson9";
import Lesson10 from "./pages/lessons/Lesson10";
import Lesson11 from "./pages/lessons/Lesson11";
import Lesson12 from "./pages/lessons/Lesson12";
import Lesson13 from "./pages/lessons/Lesson13";
import Lesson14 from "./pages/lessons/Lesson14";
import Lesson15 from "./pages/lessons/Lesson15";
import Lesson16 from "./pages/lessons/Lesson16";
import Lesson17 from "./pages/lessons/Lesson17";
import About from "./pages/About";
import Privacy from "./pages/Privacy";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/greek-alphabet" element={<GreekAlphabet />} />
        <Route path="/learn" element={<Learn />} >
          <Route path="lesson-1" element={<Lesson1 />} />
          <Route path="lesson-2" element={<Lesson2 />} />
          <Route path="lesson-3" element={<Lesson3 />} />
          <Route path="lesson-4" element={<Lesson4 />} />
          <Route path="lesson-5" element={<Lesson5 />} />
          <Route path="lesson-6" element={<Lesson6 />} />
          <Route path="lesson-7" element={<Lesson7 />} />
          <Route path="lesson-8" element={<Lesson8 />} />
          <Route path="lesson-9" element={<Lesson9 />} />
          <Route path="lesson-10" element={<Lesson10 />} />
          <Route path="lesson-11" element={<Lesson11 />} />
          <Route path="lesson-12" element={<Lesson12 />} />
          <Route path="lesson-13" element={<Lesson13 />} />
          <Route path="lesson-14" element={<Lesson14 />} />
          <Route path="lesson-15" element={<Lesson15 />} />
          <Route path="lesson-16" element={<Lesson16 />} />
          <Route path="lesson-17" element={<Lesson17 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;