import { Route, Routes } from "react-router"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import CareerRoadmap from "./pages/CareerRoadmap"

function App() {

  return (
    <>
      <Routes> 
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/career-roadmap" element={<CareerRoadmap/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
