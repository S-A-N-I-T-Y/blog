import Navbar from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Create from "./Create"



function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <div className="max-w-[600px] py-8 mx-auto">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
            </Routes>
          </div >


        </Router>
      </div>
    </>
  )
}

export default App
