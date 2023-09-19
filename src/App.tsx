import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ContactUsPage from './pages/Contact'
import ImmigrationPage from './pages/Immigration'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          {/* <Route path="/immigration/:country/" element={<ImmigrationPage />} /> */}
          <Route
            path="/immigration/:country/:plan"
            // element={<ImmigrationPage />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App;