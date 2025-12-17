import Link from "next/link";

export const metadata = {
    title: "Book a Consultation | Wayfinder Mental Wellness",
    description: "Schedule your consultation with Wayfinder Mental Wellness. Take the first step towards better mental health today.",
};

export default function BookConsultation() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
                            Get Started
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Book a <span className="gradient-text">Consultation</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-8">
                            Taking the first step towards better mental health is an act of courage.
                            We're here to support you on your journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div className="card">
                                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Request an Appointment
                                </h2>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-[var(--warm-300)] focus:border-[var(--sage-500)] focus:outline-none focus:ring-2 focus:ring-[var(--sage-200)] transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-[var(--warm-300)] focus:border-[var(--sage-500)] focus:outline-none focus:ring-2 focus:ring-[var(--sage-200)] transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 rounded-xl border border-[var(--warm-300)] focus:border-[var(--sage-500)] focus:outline-none focus:ring-2 focus:ring-[var(--sage-200)] transition-all"
                                            placeholder="(123) 456-7890"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                            Service Interested In
                                        </label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-[var(--warm-300)] focus:border-[var(--sage-500)] focus:outline-none focus:ring-2 focus:ring-[var(--sage-200)] transition-all bg-white">
                                            <option value="">Select a service</option>
                                            <option value="individual">Individual Counseling</option>
                                            <option value="couples">Couples Counseling</option>
                                            <option value="relaxation">Relaxation Sessions</option>
                                            <option value="workshop">Wellness Workshops</option>
                                            <option value="workplace">Workplace Trainings</option>
                                            <option value="supervision">Clinical Supervision</option>
                                            <option value="consultation">Private Practice Consultation</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-[var(--warm-300)] focus:border-[var(--sage-500)] focus:outline-none focus:ring-2 focus:ring-[var(--sage-200)] transition-all resize-none"
                                            placeholder="Tell us a bit about what you're looking for..."
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-full">
                                        Send Request
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    What to Expect
                                </h2>
                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--sage-100)] flex items-center justify-center flex-shrink-0">
                                            <span className="text-[var(--sage-600)] font-semibold">1</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Submit Your Request</h3>
                                            <p className="text-sm text-[var(--text-muted)]">Fill out the form with your information and we'll get back to you within 24-48 hours.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--sage-100)] flex items-center justify-center flex-shrink-0">
                                            <span className="text-[var(--sage-600)] font-semibold">2</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Initial Consultation</h3>
                                            <p className="text-sm text-[var(--text-muted)]">We'll schedule a brief call to discuss your needs and match you with the right therapist.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-[var(--sage-100)] flex items-center justify-center flex-shrink-0">
                                            <span className="text-[var(--sage-600)] font-semibold">3</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Begin Your Journey</h3>
                                            <p className="text-sm text-[var(--text-muted)]">Start your first session and take the first step towards better mental health.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card bg-[var(--sage-50)] border-[var(--sage-200)]">
                                    <h3 className="font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        Contact Information
                                    </h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <a href="mailto:info@wayfindermentalwellness.com" className="text-[var(--sage-700)] hover:underline">
                                                info@wayfindermentalwellness.com
                                            </a>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <a href="tel:843-800-0954" className="text-[var(--sage-700)] hover:underline">
                                                843-800-0954
                                            </a>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <svg className="w-5 h-5 mt-0.5 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>
                                                1 Carriage Lane Building B, Suite 102<br />
                                                Charleston, SC 29407
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Mon – Fri: 9:00am - 5:00pm</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
