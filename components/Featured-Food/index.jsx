import React from 'react';
import Link from "next/link";

// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdStar, MdOutlineAddShoppingCart } from "react-icons/md";

// Featured Food Data
import foods from './data/data.js';

const FeaturedFood = () => {
  return (
    <div className="mb-2 mt-16 pt-0">
        <div className="flex flex-col justify-center items-center gap-1 sm:flex-row sm:justify-between sm:gap-0">
            <h1 className="text-3xl font-bold sm:text-4xl">Ofertas del día</h1>
            <Link href="/menu">
                <a className="flex justify-center items-center gap-1 text-rose-600" title="See All">
                  <span>ver todas las ofertas</span>
                  <HiOutlineArrowNarrowRight />
                </a>
            </Link>
        </div>
        <div className="my-5 grid place-items-center grid-cols-1 gap-1 md:grid-cols-3 sm:grid-cols-2">
          {
            foods ? 
              foods.map((food, index) =>
                <div key={index} className="card relative bg-gray-200 rounded-xl overflow-hidden shadow-slate-900" title={food.title}>
                  <div className="absolute top-1 right-0 px-3 z-50">
                    <button className="bg-white text-sky-600 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
                      <MdOutlineAddShoppingCart />
                    </button>
                  </div>
                  <Link href={`/${food.route}`}>
                    <a>
                      <div className="relative">
                        <img src={food.image_url} alt="Food-Image" max-height="200px" width="100%" className="meal-img ease-in-out duration-300" />
                        <div className="info absolute left-0 bottom-0 bg-sky-600 p-3 pb-4 ease-in-out duration-300 opacity-0">
                          <h3 className="flex justify-between items-center text-xl font-semibold mb-1 text-white">
                            <span>{food.title}</span>
                            <span>S/ {food.price}</span>
                          </h3>
                          <p className="text-sm text-gray-50 mb-2">{food.description}</p>
                          <span className="text-xl text-yellow-600 flex items-center gap-1">
                            {
                              Array.from({ length: food.rating }).map((_, index) => (
                                <MdStar key={index}/>
                              ))
                            }
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            : null
          }
        </div>
        <div className="flex justify-center items-center">
          <Link href="/menu">
            <a className="flex justify-center items-center gap-2 text-rose-600 font-semibold bg-white w-max m-auto py-2 px-4 border border-rose-600 ease-in-out duration-150 hover:bg-rose-600 hover:text-white rounded-md md:py-3 md:px-6" title="See All">
              <span>Ver todas las ofertas</span>
              <HiOutlineArrowNarrowRight />
            </a>
          </Link>
        </div>
    </div>
  )
}

export default FeaturedFood;