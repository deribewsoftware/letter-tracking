import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}
