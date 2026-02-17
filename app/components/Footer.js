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

export default function Footer() {
    return (
        <footer className="bg-[var(--sage-900)] text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <Image
                                src="/dark-logo.png"
                                alt="Wayfinder Mental Wellness"
                                width={180}
                                height={180}
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-[var(--sage-300)] text-sm leading-relaxed">
                            Guiding you towards better mental health and personal growth with compassion and expertise.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {services.slice(0, 5).map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-[var(--sage-300)] hover:text-white text-sm transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-[var(--sage-300)] hover:text-white text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-[var(--sage-300)] hover:text-white text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/#team" className="text-[var(--sage-300)] hover:text-white text-sm transition-colors">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/book-a-consultation" className="text-[var(--sage-300)] hover:text-white text-sm transition-colors">
                                    Book a Consultation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Contact Info
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-0.5 text-[var(--sage-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:crystal.a.hank@gmail.com" className="text-[var(--sage-300)] hover:text-white text-sm transition-colors">
                                    crystal.a.hank@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-0.5 text-[var(--sage-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:843-800-0954" className="text-[var(--sage-300)] hover:text-white text-sm transition-colors">
                                    843-800-0954
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-0.5 text-[var(--sage-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-[var(--sage-300)] text-sm">
                                    1 Carriage Lane Building B, Suite 102<br />
                                    Charleston, SC 29407
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-0.5 text-[var(--sage-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-[var(--sage-300)] text-sm">
                                    Mon – Fri: 9:00am - 5:00pm
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[var(--sage-700)]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[var(--sage-400)] text-sm">
                            © {new Date().getFullYear()} Wayfinder Mental Wellness. All rights reserved.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary text-sm">
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
