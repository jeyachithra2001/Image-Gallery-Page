import Cards from "./components/cards"
import Category from "./components/categories"
import Footer from "./components/Footer"
import HeroSection from "./components/hero"
import Navbar from "./components/Navbar"
import cardData from "./data/cardData"

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Category/>
      <Cards cardData = {cardData}/>
      <Footer/>
    </>
  )
}

export default App
