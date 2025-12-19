import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import WhyChooseCavree from './components/WhyChooseCavree'
import CavreeStory from './components/CavreeStory'
import MembershipBenefits from './components/MembershipBenefits'
import CavreeProcess from './components/CavreeProcess'
import BeginYourLegacy from './components/BeginYourLegacy'
import CavreeFooter from './components/CavreeFooter'
import CavreeHeader from './components/CavreeHeader'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CavreeHeader />
    <Hero/>
    <WhyChooseCavree/>
    <CavreeStory/>
    <MembershipBenefits/>
    <CavreeProcess/>
    <BeginYourLegacy/>
    <CavreeFooter/>
    <CavreeHeader/>
    </>
  )
}

export default App
