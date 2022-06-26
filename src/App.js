import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"
import Account from "./routes/Account"
import Home from "./routes/Home"
import Signin from "./routes/Signin"
import Signup from "./routes/Signup"

import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [coins, setCoins] = useState([])

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=true"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data)
      })
  }, [url])

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
