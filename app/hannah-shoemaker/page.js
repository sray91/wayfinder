import Link from "next/link";
import Image from "next/image";

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
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium tracking-widest uppercase mb-6">
                                    Meet the Team
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Hannah Shoemaker (she/her), <span className="gradient-text">M.A., LPC-A</span>
                                </h1>
                                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                                    <p>
                                        I believe in helping individuals navigate life&#39;s challenges &amp;
                                        enhance their mental well-being by utilizing an evidence-based
                                        yet client-centered approach.
                                    </p>
                                    <p>
                                        I prioritize tailoring treatment to meet each client&#39;s individual
                                        needs knowing that clients have a variety of concerns that may
                                        lead them to therapy.
                                    </p>
                                    <p>
                                        My specialties include trauma, anxiety, &amp; depression. I have
                                        worked in various settings including clinical research, a child
                                        advocacy center, and a behavioral health program and have
                                        experience with individuals of varying religious beliefs, ethnicity,
                                        gender identity, and sexual orientation. I am committed to
                                        creating a safe &amp; supportive environment where clients feel
                                        empowered to explore their thoughts &amp; feelings, gain insight,
                                        build the skills for overcoming challenges, &amp; achieve your goals.
                                    </p>
                                    <p>
                                        My goal is to work collaboratively with you to develop strategies
                                        that foster growth &amp; resilience. In sessions, you can expect a
                                        compassionate, non-judgmental space where we&#39;ll explore your
                                        concerns &amp; collaborate to develop strategies for change.
                                    </p>
                                    <p>
                                        I am here to support you on your path to personal growth &amp;
                                        healing. Feel free to reach out to schedule a consultation or to
                                        ask any questions. I look forward to working with you!
                                    </p>
                                </div>
                                <p className="mt-6 flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    843-483-6723
                                </p>
                            </div>
                            <div>
                                <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-[var(--teal-200)] to-[var(--sage-200)] overflow-hidden">
                                    <Image
                                        src="/hannah.png"
                                        alt="Hannah Shoemaker"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[var(--text-primary)] font-medium">Licensed Professional Counselor Associate, LPC-A</span>
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
