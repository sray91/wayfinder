import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Vincent Bianculli, M.A., LPC-A | Wayfinder Mental Wellness",
    description: "Licensed Professional Counselor Associate providing supportive mental health counseling services.",
};

export default function VincentBianculli() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium tracking-widest uppercase mb-6">
                                    Meet the Team
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Vincent Bianculli (he/him), <span className="gradient-text">MA, LPC-A</span>
                                </h1>
                                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                                    <p>
                                        I am passionate about creating a safe, inclusive, and affirming
                                        space for individuals and couples navigating life&#39;s challenges.
                                    </p>
                                    <p>
                                        With a focus on LGBTQ+ issues, anxiety, depression, and couples
                                        therapy, I offer compassionate support tailored to your unique
                                        experiences.
                                    </p>
                                    <p>
                                        I have worked with clients in a range of settings including,
                                        inpatient treatment, community mental health centers, Veteran
                                        Affairs couples clinic, and intensive outpatient treatment for
                                        drug and alcohol recovery.
                                    </p>
                                    <p>
                                        No matter where you are in life, you deserve to live authentically
                                        and find peace within. Whether you&#39;re seeking to explore your
                                        identity as part of the LGBTQ+ community, address
                                        anxiety/depression, or strengthen your relationship, I am here to
                                        help.
                                    </p>
                                    <p>
                                        My approach blends Cognitive Behavioral Therapy (CBT) and
                                        mindfulness techniques, ensuring that you feel seen, heard, and
                                        supported in your journey towards healing and self-acceptance.
                                    </p>
                                </div>
                                <p className="mt-6 flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    (843) 258-1257
                                </p>
                            </div>
                            <div>
                                <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-[var(--sage-200)] to-[var(--teal-200)] overflow-hidden">
                                    <Image
                                        src="/vincent.png"
                                        alt="Vincent Bianculli"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[var(--text-primary)] font-medium">Licensed Professional Counselor Associate in South Carolina</span>
                                    </div>
                                </div>
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
