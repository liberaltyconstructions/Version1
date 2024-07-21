import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Work from "./components/Work/Work"
import Testimonials from "./components/Testimonials/Testimonial"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
