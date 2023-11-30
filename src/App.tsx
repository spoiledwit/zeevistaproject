import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactUsPage from "./pages/Contact";
import ImmigrationPage from "./pages/Immigration";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";
import DynamicPage from "./pages/Level1/DynamicPage";
import ImmigrationPage3 from "./pages/Level1/ImmigrationPage3";
import Admin from "./pages/Admin/Admin";

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/about-us" element={<AboutPage setProgress={setProgress} />} />
          <Route path="/contact" element={<ContactUsPage setProgress={setProgress} />} />
          {/* Immmigration Pages */}
          <Route path="/immigration" element={<ImmigrationPage3 setProgress={setProgress} />} />
          <Route path="/immigration/:country/" element={<ImmigrationPage3 setProgress={setProgress} />} />
          <Route
            path="/immigration/:country/:plan"
            element={<ImmigrationPage setProgress={setProgress} />}
          />
          {/* Visit Visas */}
          <Route path="/visit-visas" element={<DynamicPage country="visit-visas" setProgress={setProgress} />} />

          {/* Caribbean */}
          <Route path="/caribbean" element={<DynamicPage country="caribbean" setProgress={setProgress} />} />

          {/* Student visas */}
          <Route path="/student-visas" element={<DynamicPage country="student-visas" setProgress={setProgress} />} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
