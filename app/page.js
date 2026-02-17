import Link from "next/link";
import ServiceCard from "./components/ServiceCard";
import TeamCard from "./components/TeamCard";

const services = [
  {
    title: "Individual Counseling",
    description: "Personalized therapy sessions to help you navigate life's challenges and achieve personal growth.",
    href: "/individual-counseling",
    icon: "individual",
  },
  {
    title: "Couples Counseling",
    description: "Strengthen your relationship with validation and support for both partners through guided sessions.",
    href: "/couples-counseling",
    icon: "couples",
  },
  {
    title: "Relaxation Sessions",
    description: "Learn deep breathing, mindful breathing, PMR, and guided imagery techniques.",
    href: "/relaxation-sessions",
    icon: "relaxation",
  },
  {
    title: "Wellness Workshops",
    description: "Group sessions exploring the science of relaxation and evidence-based wellness practices.",
    href: "/wellness-workshops",
    icon: "workshop",
  },
  {
    title: "Workplace Trainings",
    description: "Stress management and mental wellness training customized for your organization.",
    href: "/workplace-trainings",
    icon: "workplace",
  },
  {
    title: "Clinical Supervision",
    description: "Professional supervision for LPC-A's working toward LPC status and clinicians seeking LPC-S certification.",
    href: "/clinical-supervision",
    icon: "supervision",
  },
  {
    title: "Private Practice Consultation",
    description: "Guidance on starting and growing your private practice, from insurance paneling to billing systems.",
    href: "/private-practice-consultation",
    icon: "consultation",
  },
];

const teamMembers = [
  {
    name: "Crystal Hank, Psy.D., LP",
    title: "Licensed Psychologist",
    image: "/crystal.png",
    href: "/crystal-hank",
  },
  {
    name: "Hannah Shoemaker, M.A., LPC-A",
    title: "Licensed Professional Counselor Associate",
    image: "/hannah.png",
    href: "/hannah-shoemaker",
  },
  {
    name: "Vincent Bianculli, M.A., LPC-A",
    title: "Licensed Professional Counselor Associate",
    image: "/vincent.png",
    href: "/vincent",
  },
];

const issues = [
  "Depression",
  "Anxiety",
  "LGBTQIAA+ Issues",
  "Bariatric Surgery Prep",
  "Career Counseling",
  "Coping Skills",
  "Divorce",
  "Grief",
  "Marital & Premarital",
  "Racial Identity",
  "Relationship Issues",
  "Self Esteem",
  "Sleep & Insomnia",
  "Trauma & PTSD",
  "Women's Issues",
];

const communities = [
  "Bisexual Allied",
  "Body Positivity",
  "Gay Allied",
  "HIV/AIDS Allied",
  "Lesbian Allied",
  "Non-Binary Allied",
  "Queer Allied",
  "Racial Justice Allied",
  "Transgender Allied",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage-50)] via-[var(--cream)] to-[var(--teal-50)]"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--sage-200)] rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--teal-200)] rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '-3s' }}></div>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            ✨ Charleston, SC Mental Wellness Practice
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--text-primary)] animate-fade-in-up text-balance" style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.1s' }}>
            Let Us Guide You Towards
            <span className="block gradient-text">Better Mental Health</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our compassionate professionals are here to support you on your journey to wellness, offering a range of services tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/book-a-consultation" className="btn btn-primary text-lg px-8 py-4">
              Book a Consultation
            </Link>
            <Link href="#services" className="btn btn-secondary text-lg px-8 py-4">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--sage-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About / Our Approach Section */}
      <section id="about" className="section section-alt">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Taking the First Step is an Act of <span className="gradient-text">Courage</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
              At Wayfinder Wellness, we believe in guiding you towards better mental health and personal growth.
              Our approach focuses on the interconnection of thoughts, feelings, and behaviors, helping you make
              meaningful changes that lead to relief and healing.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white border border-[var(--warm-200)]">
                <div className="w-12 h-12 rounded-full bg-[var(--sage-100)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--sage-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cognitive Behavioral Therapy</h3>
                <p className="text-sm text-[var(--text-muted)]">Evidence-based techniques to reshape thought patterns</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[var(--warm-200)]">
                <div className="w-12 h-12 rounded-full bg-[var(--teal-100)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--teal-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Self-Compassion Techniques</h3>
                <p className="text-sm text-[var(--text-muted)]">Learning to treat yourself with kindness and understanding</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[var(--warm-200)]">
                <div className="w-12 h-12 rounded-full bg-[var(--sage-100)] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[var(--sage-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Acceptance & Commitment</h3>
                <p className="text-sm text-[var(--text-muted)]">Embracing experiences while committing to meaningful action</p>
              </div>
            </div>
            <p className="mt-10 text-[var(--text-secondary)] italic">
              Our style is collaborative, warm, and non-judgmental, tailored to your individual needs and cultural identities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive Care for Your <span className="gradient-text">Wellbeing</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              We offer a range of services designed to support your mental health journey, from individual therapy to professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Issues We Treat */}
      <section className="section section-alt">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
                Common Issues
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Issues We Work With in Therapy
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {issues.map((issue) => (
                <span key={issue} className="badge">
                  {issue}
                </span>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Communities We Support
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {communities.map((community) => (
                  <span key={community} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--teal-50)] to-[var(--sage-50)] text-[var(--teal-700)] rounded-full text-sm font-medium border border-[var(--teal-200)]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {community}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[var(--sage-100)] text-[var(--sage-700)] rounded-full text-sm font-medium mb-6">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meet Your <span className="gradient-text">Guides</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our team of dedicated mental health professionals is here to support you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <TeamCard key={member.href} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-[var(--sage-600)] to-[var(--sage-800)] text-white p-10 md:p-16 text-center border-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-[var(--sage-200)] mb-8 max-w-2xl mx-auto">
                Taking the first step towards better mental health is an act of courage. We're here to support you every step of the way.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[var(--sage-300)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-[var(--sage-300)] text-sm">Email</p>
                    <a href="mailto:crystal.a.hank@gmail.com" className="hover:text-[var(--sage-200)] transition-colors" style={{ color: 'var(--sage-700)' }}>
                      crystal.a.hank@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[var(--sage-300)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-[var(--sage-300)] text-sm">Phone</p>
                    <a href="tel:843-800-0954" className="hover:text-[var(--sage-200)] transition-colors" style={{ color: 'var(--sage-700)' }}>
                      843-800-0954
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 text-[var(--sage-300)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-[var(--sage-300)] text-sm">Hours</p>
                    <p>Mon – Fri: 9am - 5pm</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center mb-8">
                <svg className="w-6 h-6 mt-1 text-[var(--sage-300)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>1 Carriage Lane Building B, Suite 102, Charleston, SC 29407</p>
              </div>

              <Link href="/book-a-consultation" className="inline-flex btn text-lg px-10 py-4" style={{ background: 'var(--sage-700)', color: 'white', boxShadow: '0 0 20px rgba(93, 110, 79, 0.5)' }}>
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
