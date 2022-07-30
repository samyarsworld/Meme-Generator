import React, { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

export default function App() {

  const [meh, setMeh] = useState("meh")



  return (
    <div>
      <Header />
      <Main meh={meh} />
    </div>
  )
}