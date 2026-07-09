import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, ChevronLeft, Sparkles } from "lucide-react";
import { services } from "@/components/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: `${service.title} at TONI&GUY RPS More Saguna Patna, a premium salon in Patna.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-noir text-white">
      <section className="relative min-h-[70vh] overflow-hidden px-4 py-24 sm:px-5 sm:py-28">
        <Image src="/images/service-detail.png" alt={`${service.title} salon service`} fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-emerald-950/42" />
        <div className="relative mx-auto max-w-5xl">
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-emerald-300">
            <ChevronLeft size={17} /> Services
          </Link>
          <Icon className="mt-16 text-emerald-300" size={44} />
          <h1 className="mt-5 font-heading text-4xl sm:text-6xl md:text-8xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-silver sm:text-lg sm:leading-9">{service.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/#book" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-300 px-7 py-4 text-sm font-bold uppercase text-black shadow-glow transition hover:bg-white">
              <CalendarCheck size={18} /> Book Appointment
            </a>
            <span className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-7 py-4 text-sm font-bold uppercase text-white">
              <Sparkles size={18} /> {service.price}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
