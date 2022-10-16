import React from "react";
import Link from "next/link";

const ServicesBanner = () => {
    return (
        <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10">
            <div className="mb-16 lg:mb-0">
                <img src="./summer.webp" alt="Online-Groceries" width="600px" max-width="100%" />
            </div>

            <div className="text-center lg:mb-0 lg:text-left">
                <span className="uppercase font-semibold text-rose-600 text-md">
                Adelanta tu Navidad
                </span>
                <h1 className="text-4xl font-bold leading-12 mt-4 md:text-5xl">
                ¡Los mejores descuentos solo en tu tienda virtual Hogar Menacho!
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                Cubrimos hasta 50% del costo de tus envíos gratis
                </p>
                <Link href="/menu">
                    <a className="flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-rose-600 text-white font-bold border border-rose-600 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-rose-600 lg:m-0 md:py-3 md:px-6" title="Read More">
                        ver Más
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default ServicesBanner;