import Link from "next/link";

export const metadata = {
    title: "Relaxation Sessions | Wayfinder Mental Wellness",
    description: "Learn evidence-based relaxation techniques including deep breathing, mindful breathing, PMR, and guided imagery.",
};

export default function RelaxationSessions() {
    const techniques = [
        {
            name: "Deep Breathing",
            description: "Controlled breathing exercises to activate your body's natural relaxation response.",
            icon: "🌬️",
        },
        {
            name: "Mindful Breathing",
            description: "Present-moment awareness through focused attention on your breath.",
            icon: "🧘",
        },
        {
            name: "Progressive Muscle Relaxation (PMR)",
            description: "Systematic tensing and releasing of muscle groups to reduce physical tension.",
            icon: "💪",
        },
        {
            name: "Guided Imagery",
            description: "Visualization techniques to create calming mental images and reduce stress.",
            icon: "🌅",
        },
    ];

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
                            Stress Relief
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Relaxation <span className="gradient-text">Sessions</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Learn powerful, evidence-based techniques to manage stress and cultivate
                            lasting calm in your daily life.
                        </p>
                        <Link href="/book-a-consultation" className="btn btn-primary">
                            Book a Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* Techniques Grid */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Techniques You'll Learn
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {techniques.map((technique) => (
                                <div key={technique.name} className="card">
                                    <span className="text-4xl mb-4 block">{technique.icon}</span>
                                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        {technique.name}
                                    </h3>
                                    <p className="text-[var(--text-muted)]">{technique.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/book-a-consultation" className="btn btn-primary">
                                    Book a Consultation
                                </Link>
                                <Link href="/wellness-workshops" className="btn btn-secondary">
                                    View Workshops
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
