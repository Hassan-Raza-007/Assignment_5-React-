
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero_Section from './components/hero_section/Hero_Section'
import Section_One_Component from './components/Section_one_Component'
import { Text_for_Heading_two } from './components/generals/Text'
import { Text_for_para } from './components/generals/Text'
import Section_two_Component from './components/Section_two_Componet'
import Footer from './components/footer'
function App() {
  

  return (
    <>
     <Navbar />
     <Hero_Section />
     <Section_One_Component />
     <Text_for_Heading_two label='Best Sell' />
     <Text_for_para label='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
     <Section_two_Component />
     <Footer />
    </>
  )
}

export default App
