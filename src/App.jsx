import { Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import CareerRoadmap from "./pages/CareerRoadmap"
import Download from "./pages/Download"

function App() {

  return (
    <>
      <Routes> 
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/career-roadmap" element={<CareerRoadmap/>} />
          <Route path="/download" element={<Download/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
