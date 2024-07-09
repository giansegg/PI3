import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between font-medium text-xl items-center border-b-4 border-green-600 rounded-sm pb-4">
            <div className="flex flex-row gap-5 items-center">
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                <strong>PaltaBot</strong>
            </div>
            <ul className="flex flex-row gap-10">
                <Link href="#home" className="bg-gray-200 rounded-md px-4 py-2">
                    Inicio
                </Link>
                <Link
                    href="#about-me"
                    className="bg-gray-200 rounded-md px-4 py-2"
                >
                    Nosotros
                </Link>
                <Link
                    href="#contact"
                    className="bg-gray-200 rounded-md px-4 py-2"
                >
                    Contacto
                </Link>
            </ul>
        </nav>
    );
}
