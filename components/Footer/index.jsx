import React from "react";
import Link from "next/link";

// React Icons
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsTelephonePlus, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="mt-20 mb-12 grid place-items-center grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:mt-12">
                <div className="text-center md:text-left">
                    <h2 title="DeliPat - Your Favourite Food Delivery Partner">
                        <Link href="/">
                            <a className="flex flex-col justify-center items-center gap-0 w-max m-auto md:m-0">
                                <MdOutlineDeliveryDining className="text-5xl text-rose-600" />
                                <span className="text-xl text-black font-semibold">Hogar Menacho</span>
                            </a>
                        </Link>
                    </h2>
                    <p className="my-6 text-gray-600 text-sm text-justify sm:text-center md:text-left leading-8">
                    En Hogar Menacho, vive la nueva experiencia de realizar compras por internet 
                    </p>
                    <h5 className="font-semibold text-sm text-gray-600">
                        &copy; 2020 - 2022 - HM. All Rights Reserved.
                    </h5>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Servicio al cliente</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="About Us">
                            <Link href="/about-us">Nosotros</Link>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Menu">
                            <Link href="/menu">Ofertas</Link>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Contact Us">
                            <Link href="/contact-us">Contacto</Link>
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Contactos</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Address">
                            <a className="flex items-center gap-2">
                                <GoLocation />
                                <span>Av. Juan Pabloo II S/N</span>
                            </a>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Phone">
                            <a className="flex items-center gap-2">
                                <BsTelephonePlus />
                                <span>+51-940236290</span>
                            </a>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Email">
                            <a className="flex items-center gap-2">
                                <AiOutlineMail />
                                <span>contact@Hogarmenacho.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md"> Visita nuestras redes sociales</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Facebook">
                            <Link href="">
                                <a className="flex items-center gap-2">
                                    <FaFacebookF />
                                    <span>/Hogar menacho</span>
                                </a>
                            </Link>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Twitter">
                            <Link href="">
                                <a className="flex items-center gap-2">
                                    <BsTwitter />
                                    <span>/Hogar menacho</span>
                                </a>
                            </Link>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Instagram">
                            <Link href="">
                                <a className="flex items-center gap-2">
                                    <FaInstagram />
                                    <span>/Hogar mMnacho</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-8 pt-0 px-2">
                <h5 className="text-black text-sm text-center leading-6">
                    &copy; 2022 - Made in ❤️Abancay by {" "}
                    <a href="https://www.linkedin.com/in/joelmenachoa/" target="_blank" rel="noreferrer" 
                        className="font-semibold text-rose-600">
                        Joel Menacho
                    </a> {" "}


                </h5>
            </div>
        </div>
    );
}

export default Footer;
