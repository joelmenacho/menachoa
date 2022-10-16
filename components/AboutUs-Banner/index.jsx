import React from "react";
import Link from "next/link";

const AboutUsBanner = () => {
    return (
        <div className="py-2 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:mt-5">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <span className="uppercase font-semibold text-rose-600 text-md">
                    Los nuevos comedores
                </span>
                <h1 className="text-4xl font-bold leading-12 mt-4 md:text-5xl">
                    PARA TU HOGAR
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                    
                En Hogar Menacho, vive la nueva experiencia de realizar compras por internet en el Mall online de las mejores marcas y retailers. Aquí encontrarás tiendas con productos sobre audífonos, belleza, cámaras fotográficas, celulares, cervezas, colchones, computadoras, cuidado personal, perfumes, deportes, electrodomésticos, hogar.
                </p>
                <Link href="/about-us">
                    <a className="flex justify-center items-center gap-2 w-max m-auto py-1 px-2 bg-rose-600 text-white font-bold border border-rose-600 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-rose-600 lg:m-0 md:py-3 md:px-6" title="Read More">
                        Leer Más
                    </a>
                </Link>
            </div>

            <div>
                <img src="https://acortar.link/SNMrhx" alt="Business-Deal" width="600px" max-width="100%" />
            </div>
        </div>
    );
}

export default AboutUsBanner;