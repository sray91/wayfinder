import Link from "next/link";

export const metadata = {
    title: "Wellness Workshops | Wayfinder Mental Wellness",
    description: "Group sessions exploring the science of relaxation and evidence-based wellness practices.",
};

export default function WellnessWorkshops() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--teal-50)] via-[var(--cream)] to-[var(--sage-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--teal-100)] text-[var(--teal-700)] rounded-full text-sm font-medium mb-6">
                            Group Learning
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Wellness <span className="gradient-text">Workshops</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Interactive group sessions that explore the science of relaxation and
                            evidence-based wellness practices in a supportive environment.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary">
                            Inquire About Workshops
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="card">
                                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Workshop Topics
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>The science of relaxation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Mindfulness fundamentals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Stress reduction techniques</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Building resilience</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="card bg-[var(--sage-50)] border-[var(--sage-200)]">
                                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Why Group Learning?
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    Group workshops offer unique benefits: shared experiences, peer support,
                                    diverse perspectives, and the opportunity to practice new skills in a
                                    supportive community setting.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/book-a-consultation" className="btn btn-primary">
                                    Book a Consultation
                                </Link>
                                <Link href="/workplace-trainings" className="btn btn-secondary">
                                    Workplace Trainings
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
