import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Scroll To Top Hook
import useScrollTop from '../../Hooks/useScrollTop';

export default function About() {

  useScrollTop();

  return (
    <div>
      <Head>
        <title>Hogar Menacho - Cerca de ti</title>
        <meta name="description" content="Todos en Computadoras Gamer · PC Gamer Ryu RGB Core i7 3th · PC Gamer Haku Plus Core I5 3TH · PC Gamer Draco-RGB CPU Intel Core i7 10700F" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <div>
          <div className="title-banner my-6 py-24 bg-rose-600 text-center rounded-lg sm:my-10">
            <h1 className="text-3xl font-bold text-white mx-6 md:text-5xl sm:text-4xl">
            Hogar Menacho - Cerca de ti
            </h1>
          </div>
          <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
            ¿Quienes somos?
          </h1>
          <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
            Hogar Menacho es uno de los distribuidores de tecnología más grandes del país.
            Ayudamos a compañías como IBM, HP, Apple, Cisco, Microsoft y cientos de otras compañías
            a llevar sus productos al mercado y ofrecemos una amplia gama de servicios de soporte técnico y comercial.
            Certificamos, capacitamos, instruimos y apoyamos a nuestros clientes revendedores a
            configurar, instalar y financiar sus compras.
            <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
              Soluciones para todos los negocios
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
              Crédito
            </h2>
            Lleve su negocio más allá, le ofrecemos programas flexibles de crédito,
            recompensas y opciones de leasing. Ofrecemos educación y capacitación 
            enfocada en mantener el bienestar de su negocio, incluidas alternativas de financiamiento y gestión de flujo de efectivo.
            <h2 className="mt-4 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
            Servicios de Marketing Digital
            </h2>
            A través de HM Brand, proveemos a nuestros partners soluciones de marketing para generar 
            clientes potenciales que se convierten en ventas. Diríjase a los usuarios finales con campañas dinámicas de marketing con generación de leads a través de eventos, marketing digital, telemarketing y mucho más para aumentar su visibilidad.
          </p>
          <div className="my-6 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 sm:place-items-start">
            <div>
              <img src="https://acortar.link/2T1Vwb" className="rounded-md" alt=" workstation," />
            </div>
            <div>
              <img src="https://acortar.link/NG91Y2" className="rounded-md" alt="procesador cuántico" />
            </div>
            <div>
              <img src="https://acortar.link/k70BSw" className="rounded-md" alt="procesador cuántico" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
