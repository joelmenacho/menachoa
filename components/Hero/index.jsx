import React from 'react';
import Link from "next/link";

// React Icons
import { GiHamburger } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="py-4 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:py-5">
        <div className="mb-12 text-center lg:mb-0 lg:text-left">
            <h1 className="text-4xl font-bold leading-8 md:text-6xl">
                En Hogar Menacho los envios son<span className="text-rose-600"> GRATIS</span> .
            </h1>
            <p className="my-6 text-sky-600 leading-6">
            Los productos que superen los S/ 79 tienen envío gratis y te ayudamos con el 50% del costo de envío.
            </p>
            <Link href="/menu">
                <a className="flex justify-center items-center gap-1 w-max m-auto 
                py-0.5 px-1 bg-rose-600 text-white font-bold border border-rose-600 
                rounded-md ease-in-out duration-150 shadow-slate-100 hover:bg-white 
                hover:text-rose-600 lg:m-0 md:py-3 md:px-6" title="Order Now">
                    <span>Pedir AHORA</span>

                </a>
            </Link>
        </div>

        <div>
            <img src="./header-lifestyle-ld.png" alt="Online-Groceries" width="900px" max-width="50%" />
        </div>
    </div>
  )
}

export default Hero;