"use client";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Open Source Projects" },
    { href: "/", label: "Discord Server" },
    { href: "/", label: "Contact" },
    { href: "/", label: "Server Features" },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-black h-16">
            <div className="flex items-center justify-between w-full h-full px-6">
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110">
                        CVH
                    </div>
                    <span className="text-white font-semibold text-xl hidden sm:block">
                        TCVH
                    </span>
                </a>

                <ul className="flex items-center h-full">
                    {navLinks.map((link) => (
                        <li key={link.label} className="h-full">
                            <a
                                href={link.href}
                                className="relative overflow-hidden h-full flex items-center text-white text-sm font-medium px-5 before:absolute before:inset-0 before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-black transition-colors duration-300"
                            >
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
