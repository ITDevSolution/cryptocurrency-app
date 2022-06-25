import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
import Account from "./routes/Account"
import Home from "./routes/Home"
import Signin from "./routes/Signin"
import Signup from "./routes/Signup"
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
