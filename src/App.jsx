import { Helmet } from "react-helmet"
import  Home  from "./Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import S1 from './Services/S1'
import S2 from './Services/S2'
import S3 from './Services/S3'
import S4 from "./Services/S4"
import S5 from "./Services/S5"
import S6 from "./Services/S6"
import Research from "./Research"
import Healthcare from "./Healthcare"
import Jouney from "./Jouney"
import Products from "./Products"








function App() {
  

  return (
    <>
    <Helmet>
      <title>"Signalsemitech"</title>
    </Helmet>
    <Helmet>
      <meta name="description" content="Signalsemitech"/>
    </Helmet>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/digital" element={<S1/>}/>
        <Route path="/embedded" element={<S2/>}/>
        <Route path="/consultancy" element={<S3/>}/>
        <Route path="/modules" element={<S4/>}/>
        <Route path="/stm32" element={<S5/>}/>
        <Route path="/metals" element={<S6/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/healthcare" element={<Healthcare/>}/>
        <Route path="/products" element={<Products/>}/>
        
      </Routes>
      
      </BrowserRouter>

      
      
    </>
  )
}

export default App
