import React from 'react'
import Hero from '../../components/Herosection/Hero'
import './Home.css';

import Overview from '../../components/Overview/overview';
import Features from '../../components/Features/features';

import Subscription from '../../components/Subscription/subscription';
import Footer from '../../components/Footer/footer';
import ScrollTop from '../../components/Scroll-top/ScrollTop'
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import Videos from '../../components/Videos/Videos';
import NavBar from '../../components/navBar/Nav';
import Section from '@/components/Section/Section';
import Medisection from '@/components/Medisection/Medisection';
import PersonIntro from '@/components/PersonIntro/PersonIntro';

function Home() {
  return (
    <>
    
    <NavBar />
    <div className='home-page' >
      <div className='col-lg-12 d-flex flex-row align-items-center justify-content-between'>
        <div className='col-lg-4'>
        {/* <ProfileCard /> */}
        </div>
        <div className='col-lg-4'>
          
        </div>
      </div>
      
    </div>
    <Hero />
    <br /><br />
    <PersonIntro/>
    <Medisection/>
   <Features />
    <Videos/>
    
    
    
    <ScrollTop/>
    <Whatsapp/>

    <Section/>


    <Subscription/>
    <Overview />
    <Footer />
    </>
  )
}

export default Home