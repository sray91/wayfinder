"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
    { name: "Individual Counseling", href: "/individual-counseling" },
    { name: "Couples Counseling", href: "/couples-counseling" },
    { name: "Relaxation Sessions", href: "/relaxation-sessions" },
    { name: "Wellness Workshops", href: "/wellness-workshops" },
    { name: "Workplace Trainings", href: "/workplace-trainings" },
    { name: "Clinical Supervision", href: "/clinical-supervision" },
    { name: "Private Practice Consultation", href: "/private-practice-consultation" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--warm-200)]">
            <div className="container mx-auto px-6 py-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/light-logo.png"
                            alt="Wayfinder Mental Wellness"
                            width={120}
                            height={120}
                            className="w-auto"
                            style={{ height: '95px', width: 'auto' }}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/#about" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium transition-colors">
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                            <button className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium transition-colors flex items-center gap-1">
                                Services
                                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                                <div className="bg-white rounded-2xl shadow-xl border border-[var(--warm-200)] py-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block px-4 py-2.5 text-[var(--text-secondary)] hover:bg-[var(--sage-50)] hover:text-[var(--sage-700)] transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                                </div>
                            )}
                        </div>

                        <Link href="/#team" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium transition-colors">
                            Staff
                        </Link>
                        <Link href="/#contact" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link href="/book-a-consultation" className="hidden md:flex btn btn-primary text-sm">
                        Book a Consultation
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-[var(--text-primary)]"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-[var(--warm-200)] pt-4">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium">
                                Home
                            </Link>
                            <Link href="/#about" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium">
                                About
                            </Link>
                            <div className="text-[var(--text-primary)] font-semibold">Services</div>
                            <div className="pl-4 flex flex-col gap-2">
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="text-[var(--text-muted)] hover:text-[var(--sage-600)]"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                            <Link href="/#team" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium">
                                Staff
                            </Link>
                            <Link href="/#contact" className="text-[var(--text-secondary)] hover:text-[var(--sage-600)] font-medium">
                                Contact
                            </Link>
                            <Link href="/book-a-consultation" className="btn btn-primary mt-2">
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
