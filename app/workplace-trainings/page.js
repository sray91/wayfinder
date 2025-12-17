import Link from "next/link";

export const metadata = {
    title: "Workplace Trainings | Wayfinder Mental Wellness",
    description: "Stress management and mental wellness training customized for your organization.",
};

export default function WorkplaceTrainings() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
                            Corporate Wellness
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Workplace <span className="gradient-text">Trainings</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Customized stress management and mental wellness training programs
                            designed to support your organization's wellbeing initiatives.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary">
                            Inquire About Training
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="card text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--sage-100)] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-[var(--sage-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Team Building</h3>
                                <p className="text-sm text-[var(--text-muted)]">Foster connection and psychological safety</p>
                            </div>
                            <div className="card text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--teal-100)] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-[var(--teal-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Stress Management</h3>
                                <p className="text-sm text-[var(--text-muted)]">Practical tools for workplace stress</p>
                            </div>
                            <div className="card text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--sage-100)] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-[var(--sage-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Burnout Prevention</h3>
                                <p className="text-sm text-[var(--text-muted)]">Recognize and prevent employee burnout</p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/book-a-consultation" className="btn btn-primary">
                                    Book a Consultation
                                </Link>
                                <Link href="/#contact" className="btn btn-secondary">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
