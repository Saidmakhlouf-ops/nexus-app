import { Routes, Route } from "react-router-dom"
import { appRoutes } from "./routes"
import Navbar from "./Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </>
  )
}
