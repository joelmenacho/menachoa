import React from "react";
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Featured from "../components/Featured"
import ServicesBanner from "../components/Services-Banner";
import AboutUsBanner from "../components/AboutUs-Banner";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

// Scroll To Top Hook
import useScrollTop from '../Hooks/useScrollTop';

export default function Home() {

  useScrollTop();
  
  return (
    <div>
      <Head>
        <title>Hogar Menacho - Cerca de ti</title>
        <meta name="description" content=" Nueva plataforma online enfocada en reunir marcas y productos, bajo el concepto de un Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Featured />
        <ServicesBanner />
        <AboutUsBanner />
        <Subscription />
        <Footer />
      </div>
    </div>
  )
}
