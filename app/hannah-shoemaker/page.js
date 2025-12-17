import Link from "next/link";

export const metadata = {
    title: "Hannah Shoemaker, M.A., LPC-A | Wayfinder Mental Wellness",
    description: "Licensed Professional Counselor Associate providing compassionate mental health support.",
};

export default function HannahShoemaker() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--teal-50)] via-[var(--cream)] to-[var(--sage-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 md:h-96 rounded-3xl bg-gradient-to-br from-[var(--teal-200)] to-[var(--sage-200)] overflow-hidden flex items-center justify-center">
                                <svg className="w-32 h-32 text-[var(--teal-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-2 bg-[var(--teal-100)] text-[var(--teal-700)] rounded-full text-sm font-medium mb-4">
                                    Licensed Professional Counselor Associate
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Hannah Shoemaker, <span className="gradient-text">M.A., LPC-A</span>
                                </h1>
                                <p className="text-lg text-[var(--text-secondary)] mb-6">
                                    Hannah Shoemaker is a Licensed Professional Counselor Associate
                                    committed to providing compassionate, client-centered mental health support.
                                </p>
                                <Link href="/book-a-consultation" className="btn btn-primary">
                                    Book a Session
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Services Offered
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <Link href="/individual-counseling" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Individual Counseling</h3>
                                <p className="text-sm text-[var(--text-muted)]">Personalized therapy sessions</p>
                            </Link>
                            <Link href="/couples-counseling" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Couples Counseling</h3>
                                <p className="text-sm text-[var(--text-muted)]">Relationship support and growth</p>
                            </Link>
                        </div>

                        <div className="mt-16 text-center">
                            <Link href="/book-a-consultation" className="btn btn-primary">
                                Book a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
