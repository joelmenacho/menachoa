import React from "react";
import Link from "next/link";

// React Icons
import { BiSend } from "react-icons/bi";

const Subscription = () => {
    return (
        <div className="py-10 px-4 mt-0 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 md:mt-5">
            <div className="mb-16 lg:mb-0">
                <img src="https://acortar.link/avtg0W" alt="Personal-Email" width="500px" max-width="200%" />
            </div>

            <div className="text-center lg:mb-0 lg:text-left">
                <h1 className="text-4xl font-bold leading-12 md:text-5xl">
                Vende con Nosotros
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                Es una nueva plataforma online enfocada en reunir marcas y productos, bajo el concepto de un Marketplace para todos. En Hogar Menacho, vive la nueva experiencia de realizar compras por internet en el Mall online de las mejores marcas y retailers
                </p>
                <div className="flex flex-col justify-start items-center gap-2 max-w-xl w-100 m-auto lg:m-0 md:flex-row">
                    <input type="email" placeholder="hola@hogarmenacho.com" className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-rose-600" />
                    <Link href="">
                        <a className="w-full flex justify-center items-center gap-2 m-auto py-3 px-4 bg-rose-600 text-white text-sm font-bold border border-rose-600 rounded-md ease-in-out duration-150 s00hadow-slate-6 hover:bg-white hover:text-rose-600 lg:m-0 md:w-max md:px-6 md:w-20" title="Subscribe">
                            <span>Enviar</span>
                            <BiSend />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Subscription;