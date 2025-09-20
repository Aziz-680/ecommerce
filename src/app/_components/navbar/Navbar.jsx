"use client";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import myLogo from '../../../assets/freshcart-logo.svg';


const Navbar = () => {
    const path = usePathname();

    console.log(path);

    return (
        <div className="p-5 bg-indigo-700 text-white shadow-lg">

            <div className='w-full md:w-[80%] mx-auto flex justify-between items-center flex-col md:flex-row text-center'>
                <ul className="flex flex-col md:flex-row text-center items-center gap-6">

                    <li>
                        <Link className={path === "/" ? "" : ""} href="/">
                            <Image src={myLogo} alt='Space Cart Logo' />
                        </Link>
                    </li>

                    <li>
                        <Link className={path === "/categories" ? "text-emerald-400" : ""} href="/categories">Categories</Link>
                    </li>

                    <li>
                        <Link className={path === "/brands" ? "text-emerald-400" : ""} href="/brands">Brands</Link>
                    </li>

                    <li>
                        <Link className={path === "/cart" ? "text-emerald-400" : ""} href="/cart">Cart</Link>
                    </li>

                </ul>

                <div>
                    <div>
                        <i className='fab fa-linkedin mx-2 text-emerald-400'></i>
                        <i className='fab fa-github mx-2 text-emerald-400'></i>
                        <i className='fa fa-mail-bulk mx-2 text-emerald-400' ></i>
                        <i className='fab fa-facebook mx-2 text-emerald-400'></i>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row text-center items-center gap-2">
                    <div>
                        <Link className={path === "/register" ? "text-emerald-400" : ""} href="/register">Signup</Link>
                    </div>
                    <div>
                        <Link className={path === "/login" ? "text-emerald-400" : ""} href="/login">Login</Link>
                    </div>
                    <div>
                        <button className=''>Logout</button>
                    </div>

                </div>

            </div>





        </div>

    )
}

export default Navbar