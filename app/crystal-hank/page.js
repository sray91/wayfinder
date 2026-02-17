import Link from "next/link";
import Image from "next/image";

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
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium tracking-widest uppercase mb-6">
                                    Meet the Owner
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Crystal A. Hank (she/her), <span className="gradient-text">Psy.D., LP</span>
                                </h1>
                                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                                    <p>
                                        I enjoy tailoring my approach and creating a warm, welcoming
                                        environment for work with clients who have a variety of
                                        concerns that may lead them to seek counseling.
                                    </p>
                                    <p>
                                        This includes anxiety, depression, trauma, identity development,
                                        LGBTQ+ concerns, adjustment to new life stressors, stress
                                        management, grief and loss, body image concerns, and working
                                        with those who are going through the process for bariatric
                                        surgery, or are adjusting to the post-operative lifestyle.
                                        I have worked with clients in a wide range of settings, including
                                        inpatient treatment, a bariatric weight loss program, multiple
                                        college counseling centers, and a community health center.
                                    </p>
                                    <p>
                                        I also have experience with diverse clinical populations,
                                        including individuals of varying religious beliefs, ethnicity,
                                        gender identity, and sexual orientation. I use an integrative
                                        approach to counseling, which includes cognitive behavioral
                                        therapy, self-compassion, and acceptance and commitment
                                        therapy.
                                    </p>
                                    <p>
                                        My approach is collaborative, warm, and nonjudgmental. If this
                                        seems to match your needs and what you are looking for,
                                        please give me a call, so we can begin helping you grow and
                                        thrive in your daily life.
                                    </p>
                                </div>
                                <p className="mt-6 flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    843-800-0954
                                </p>
                            </div>
                            <div>
                                <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-[var(--sage-200)] to-[var(--teal-200)] overflow-hidden">
                                    <Image
                                        src="/crystal.png"
                                        alt="Crystal Hank"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[var(--text-primary)] font-medium">Licensed Clinical Psychologist in Virginia</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-[var(--text-primary)] font-medium">Licensed Psychologist in South Carolina</span>
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
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/individual-counseling" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Individual Counseling</h3>
                                <p className="text-sm text-[var(--text-muted)]">Personalized therapy sessions</p>
                            </Link>
                            <Link href="/clinical-supervision" className="card hover:border-[var(--sage-300)]">
                                <h3 className="font-semibold mb-2">Clinical Supervision</h3>
                                <p className="text-sm text-[var(--text-muted)]">For LPC-A&#39;s and clinicians</p>
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
