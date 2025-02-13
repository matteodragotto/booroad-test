import DefaultLayout from "./layouts/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TravelDetail from "./pages/TravelDetail"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage} />
          <Route path="/dettaglio-viaggio/:id" Component={TravelDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App