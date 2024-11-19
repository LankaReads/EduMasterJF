import React from 'react';
import '@/pages/about/About.css';
import Footer from '@/components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollTop from '@/components/Scroll-top/ScrollTop';
import NavBar from '@/components/navBar/Nav';
import PersonIntro from '@/components/PersonIntro/PersonIntro';
import Section from '@/components/Section/Section';
import Subscription from '@/components/Subscription/subscription';


function About() {
  return (
    <>
      <NavBar />



        <PersonIntro/>
      
        

          {/* AI in Medicine Features Section */}
<div className="row text-center mb-5">
  <div className="col-md-4 mb-4">
    <div className="card h-100 border-0 shadow-sm p-3">
      <i className="bi bi-heart-pulse text-danger mb-3" style={{ fontSize: '3rem' }}></i>
      <h4 className="mb-3">Precision Healthcare</h4>
      <p>
        Our platform uses AI-driven insights to deliver personalized care, tailoring treatments to individual patient needs for better outcomes and improved quality of life.
      </p>
    </div>
  </div>
  <div className="col-md-4 mb-4">
    <div className="card h-100 border-0 shadow-sm p-3">
      <i className="bi bi-file-earmark-medical-fill text-info mb-3" style={{ fontSize: '3rem' }}></i>
      <h4 className="mb-3">Data-Driven Diagnostics</h4>
      <p>
        Leverage advanced algorithms and large datasets to enhance diagnostic accuracy, enabling healthcare providers to make well-informed decisions swiftly and accurately.
      </p>
    </div>
  </div>
  <div className="col-md-4 mb-4">
  <div className="card h-100 border-0 shadow-sm p-3">
    <i className="bi bi-person-check-fill text-success mb-3" style={{ fontSize: '3rem' }}></i>
    <h4 className="mb-3">Enhanced Patient Care</h4>
    <p>
      Using AI-powered insights, our platform prioritizes patient well-being by improving care quality, streamlining workflows, and personalizing treatment plans to meet unique health needs.
    </p>
  </div>
</div>

<Section/>
<Subscription/>

</div>

           
     

      <ScrollTop />
      <Footer />
    </>
  );
}

export default About;
