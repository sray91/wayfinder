import Link from "next/link";

export const metadata = {
    title: "Individual Counseling | Wayfinder Mental Wellness",
    description: "Personalized therapy sessions to help you navigate life's challenges and achieve personal growth.",
};

export default function IndividualCounseling() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
                            Individual Therapy
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Individual <span className="gradient-text">Counseling</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Personalized therapy sessions designed to help you navigate life's challenges,
                            develop coping skills, and achieve meaningful personal growth.
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
                                    What to Expect
                                </h2>
                                <p className="text-[var(--text-secondary)] mb-4">
                                    Individual counseling provides a safe, confidential space where you can explore your thoughts,
                                    feelings, and behaviors with a trained professional. Our therapists use an integrative approach
                                    that may include:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Cognitive Behavioral Therapy (CBT)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Self-Compassion Techniques</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Acceptance and Commitment Therapy (ACT)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-1 text-[var(--sage-500)]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Mindfulness-Based Approaches</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="card bg-[var(--sage-50)] border-[var(--sage-200)]">
                                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Issues We Address
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Depression", "Anxiety", "Trauma & PTSD", "Grief", "Self Esteem", "Career Counseling", "Sleep Issues", "Coping Skills", "Relationship Issues"].map((issue) => (
                                        <span key={issue} className="badge text-xs">
                                            {issue}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Ready to Get Started?
                            </h2>
                            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                                Taking the first step towards seeking help is an act of courage.
                                Our team is here to provide a positive, supportive therapeutic experience.
                            </p>
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
