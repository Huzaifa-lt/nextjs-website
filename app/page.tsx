import Hero from "../components/Hero";
// import Header from "../components/Header";
import Expertise from "../components/Expertise";
import Experience from "../components/Experience";
import Technology from "../components/Technology";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
     {/* <Header/> */}
     <main>
        <Hero/>
        <Expertise />
        <Experience />
        <Technology />
        <Testimonials />
        <ContactUs />
        <Footer />
    </main>
    </>
     
   
  );
}
