import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About"
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Projects from "../components/Projects";

const RoutesList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesList;
