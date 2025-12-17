import Link from "next/link";

export const metadata = {
    title: "Private Practice Consultation | Wayfinder Mental Wellness",
    description: "Guidance on starting and growing your private practice, from insurance paneling to billing systems.",
};

export default function PrivatePracticeConsultation() {
    const services = [
        "Insurance paneling",
        "Client acquisition strategies",
        "Associate integration",
        "Billing systems setup",
        "Practice management",
        "Marketing guidance",
    ];

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--teal-50)] via-[var(--cream)] to-[var(--sage-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--teal-100)] text-[var(--teal-700)] rounded-full text-sm font-medium mb-6">
                            Business Development
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Private Practice <span className="gradient-text">Consultation</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Dr. Crystal Hank offers comprehensive consultation on starting and growing
                            your private mental health practice.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                            What We Cover
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <div key={service} className="card text-center">
                                    <svg className="w-8 h-8 mx-auto mb-4 text-[var(--teal-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="font-semibold">{service}</h3>
                                </div>
                            ))}
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
