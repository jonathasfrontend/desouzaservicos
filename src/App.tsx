import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Services from "./components/Services"

function App() {
  return (
    <div className="w-full h-full">

      <Header />
      <Main />
      <Services />
      <About />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
