import Link from "next/link";
import Image from "next/image";

export default function TeamCard({ name, title, image, href }) {
    return (
        <Link href={href} className="group">
            <div className="card text-center overflow-hidden p-0">
                <div className="relative h-64 bg-gradient-to-br from-[var(--sage-200)] to-[var(--teal-200)] overflow-hidden">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-24 h-24 text-[var(--sage-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-[var(--text-primary)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {name}
                    </h3>
                    <p className="text-[var(--sage-600)] text-sm font-medium mb-3">
                        {title}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--text-muted)] font-medium text-sm group-hover:text-[var(--sage-600)] transition-colors">
                        View Profile
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
