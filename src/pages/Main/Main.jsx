import './Main.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import React from "react"
import InvitationSection from "../../components/InvitationSection/InvitationSection";

export default function Main() {
  return (
    <main>
      <Header/>

      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <InvitationSection/>

      <Footer/>
    </main>
  )
}