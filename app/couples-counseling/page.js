import Link from "next/link";

export const metadata = {
    title: "Couples Counseling | Wayfinder Mental Wellness",
    description: "Strengthen your relationship with validation and support for both partners through guided couples therapy sessions.",
};

export default function CouplesCounseling() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--teal-50)] via-[var(--cream)] to-[var(--sage-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--teal-100)] text-[var(--teal-700)] rounded-full text-sm font-medium mb-6">
                            Relationship Therapy
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Couples <span className="gradient-text">Counseling</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Strengthen your relationship with guided therapy that provides validation and support
                            for both partners, helping you build deeper connection and understanding.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary">
                            Schedule a Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    How We Help Couples
                                </h2>
                                <p className="text-[var(--text-secondary)] mb-4">
                                    Our couples counseling provides a safe, neutral space where both partners can
                                    express themselves openly. We focus on:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--teal-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        <span>Improving communication patterns</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--teal-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        <span>Rebuilding trust and intimacy</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--teal-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        <span>Resolving conflicts constructively</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--teal-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        <span>Validation and support for both partners</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--teal-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        <span>Premarital counseling and preparation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="card bg-[var(--teal-50)] border-[var(--teal-200)]">
                                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Common Reasons to Seek Help
                                </h3>
                                <ul className="space-y-2 text-[var(--text-secondary)]">
                                    <li>• Communication breakdowns</li>
                                    <li>• Infidelity or trust issues</li>
                                    <li>• Major life transitions</li>
                                    <li>• Parenting disagreements</li>
                                    <li>• Intimacy concerns</li>
                                    <li>• Pre-marital preparation</li>
                                    <li>• Separation or divorce considerations</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/book-a-consultation" className="btn btn-primary">
                                    Book a Consultation
                                </Link>
                                <Link href="/#team" className="btn btn-secondary">
                                    Meet Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
