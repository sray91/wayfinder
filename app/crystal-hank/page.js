import Link from "next/link";

export const metadata = {
    title: "Dr. Crystal Hank, Psy.D., LP | Wayfinder Mental Wellness",
    description: "Licensed Psychologist providing individual counseling, clinical supervision, and private practice consultation.",
};

export default function CrystalHank() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-80 md:h-96 rounded-3xl bg-gradient-to-br from-[var(--sage-200)] to-[var(--teal-200)] overflow-hidden flex items-center justify-center">
                                <svg className="w-32 h-32 text-[var(--sage-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-4">
                                    Licensed Psychologist
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Crystal Hank, <span className="gradient-text">Psy.D., LP</span>
                                </h1>
                                <p className="text-lg text-[var(--text-secondary)] mb-6">
                                    Dr. Crystal Hank is a licensed psychologist dedicated to helping
                                    individuals achieve mental wellness and supporting fellow clinicians
                                    in their professional development.
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
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/individual-counseling" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Individual Counseling</h3>
                                <p className="text-sm text-[var(--text-muted)]">Personalized therapy sessions</p>
                            </Link>
                            <Link href="/clinical-supervision" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Clinical Supervision</h3>
                                <p className="text-sm text-[var(--text-muted)]">For LPC-A's and clinicians</p>
                            </Link>
                            <Link href="/private-practice-consultation" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Practice Consultation</h3>
                                <p className="text-sm text-[var(--text-muted)]">Grow your private practice</p>
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
