"use client";

import GlassSurface from "./GlassSurface";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Open Source Projects" },
    { href: "/", label: "Discord Server" },
    { href: "/", label: "Contact" },
    { href: "/", label: "Server Features" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <GlassSurface
                width="100%"
                height={64}
                borderRadius={16}
                blur={12}
                backgroundOpacity={0.15}
                saturation={1.5}
                className="px-6"
            >
                <div className="flex items-center justify-between w-full h-full">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110">
                            CVH
                        </div>
                        <span className="text-white font-semibold text-lg hidden sm:block">
                            TCVH
                        </span>
                    </a>

                    <ul className="flex items-center gap-1 sm:gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-white/70 hover:text-white text-sm sm:text-base font-medium px-2 sm:px-3 py-2 rounded-lg transition-all hover:bg-white/10"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </GlassSurface>
        </nav>
    );
}
