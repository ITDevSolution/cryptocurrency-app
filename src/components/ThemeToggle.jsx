import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { HiSun, HiMoon } from "react-icons/hi"

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-primary text-2xl mr-2" />
          Ligh Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <HiMoon className="text-primary text-2xl mr-2" />
          Dark Mode
        </div>
      )}
    </div>
  )
}

export default ThemeToggle
