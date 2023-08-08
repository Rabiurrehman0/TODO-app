import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import CategoriesSection from '../Components/CategoriesSection'
import AboutUs from './AboutUs'
import ContactUs from './Contact'
import LoginPage from './Login'
import SignupPage from './SignUp'

export default function Home() {
  return (
    <>
    <HeaderSection />
    <AboutUs />
    <CategoriesSection />
    <ContactUs />
    < LoginPage/>
    < SignupPage/>
   

    
    </>
  )
}
