"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const path = usePathname();

    console.log(path);

    return (
        <div className="p-5 bg-indigo-700">
            <ul className="flex justify-between mx-150">

            <li>
                    <Link className={path === "/" ? "text-emerald-400" : ""} href="/">Home</Link>
                </li>

                <li>
                    <Link className={path === "/shop" ? "text-emerald-400" : ""} href="/shop">Shop</Link>
                </li>

                <li>
                    <Link className={path === "/cart" ? "text-emerald-400" : ""} href="/cart">Cart</Link>
                </li>

            </ul>
        </div>

    )
}

export default Navbar