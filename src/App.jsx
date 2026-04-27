
import './App.css'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Models from './Models/Models'
import Navbar from './Navbar/Navbar'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}

const modelPromise = getModels();


function App() {


  return (
    <>
      <Navbar/>

      <Banner/>

      <Models modelPromise = {modelPromise}/>

      <Footer/>

    </>
  )
}

export default App
