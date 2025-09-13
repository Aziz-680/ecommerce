"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const path = usePathname();

    console.log(path);

    return (
        <div className="p-5 bg-indigo-700">
            <ul className="flex justify-between mx-20">

                <li>
                    <Link className={path === "/shop" ? "text-black" : ""} href="/shop">Shop</Link>
                </li>

                <li>
                    <Link className={path === "/cart" ? "text-black" : ""} href="/cart">Cart</Link>
                </li>

            </ul>
        </div>

    )
}

export default Navbar