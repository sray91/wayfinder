import Link from "next/link";

export const metadata = {
    title: "Clinical Supervision | Wayfinder Mental Wellness",
    description: "Professional supervision for LPC-A's working toward LPC status and licensed clinicians seeking LPC-S certification.",
};

export default function ClinicalSupervision() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
                            Professional Development
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Clinical <span className="gradient-text">Supervision</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Dr. Crystal Hank provides clinical supervision for professionals pursuing
                            full licensure, supporting your growth as a mental health clinician.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary">
                            Inquire About Supervision
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
                                    Who We Supervise
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <strong>LPC-A's</strong>
                                            <p className="text-[var(--text-muted)]">Working toward full LPC status</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <strong>Licensed Clinicians</strong>
                                            <p className="text-[var(--text-muted)]">Seeking LPC-S certification</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="card bg-[var(--sage-50)] border-[var(--sage-200)]">
                                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Supervision Options
                                </h3>
                                <ul className="space-y-3 text-[var(--text-secondary)]">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Individual supervision available
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Group options based on demand
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/book-a-consultation" className="btn btn-primary">
                                    Book a Consultation
                                </Link>
                                <Link href="/crystal-hank" className="btn btn-secondary">
                                    About Dr. Hank
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
