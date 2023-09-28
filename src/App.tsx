import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactUsPage from "./pages/Contact";
import ImmigrationPage from "./pages/Immigration";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

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
          <Route path="/immigration/:country/" element={<ImmigrationPage setProgress={setProgress} />} />
          <Route
            path="/immigration/:country/:plan"
            element={<ImmigrationPage setProgress={setProgress} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
