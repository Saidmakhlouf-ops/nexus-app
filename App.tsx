import { Routes, Route } from "react-router-dom"
import { appRoutes } from "./routes"

export default function App() {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  )
}
