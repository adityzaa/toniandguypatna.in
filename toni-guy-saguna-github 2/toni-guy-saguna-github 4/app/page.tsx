import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  CalendarCheck,
  ChevronRight,
  Clock,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { BookingFormStatic } from "@/components/booking-form-static";
import { SectionHeading } from "@/components/section-heading";
import { SiteOverlays } from "@/components/site-overlays";
import { managementCards, reviews, services } from "@/components/site-data";

const googleMapsPlaceUrl =
  "https://www.google.com/maps/search/?api=1&query=TONI%20%26%20GUY%20-%20PATNA%20I%20SAGUNA%2C%20302%2C%20Mangalam%20Rd%2C%20near%20RPS%20more%2C%20Gadha%20Colony%2C%20Kaliket%20Nagar%2C%20Patna%2C%20Bihar%20801503";

const googleMapsDirectionsUrl =
  "https://www.google.com/maps/dir//TONI+%26+GUY+-+PATNA+I+SAGUNA,+302,+Mangalam+Rd,+near+RPS+more,+Gadha+Colony,+Kaliket+Nagar,+Patna,+Bihar+801503/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x39ed570053c166e1:0x1dedd8a21c5abef2?sa=X&ved=1t:57443&ictx=111";

const instagramUrl = "https://www.instagram.com/toniandguypatnaoffical/";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-noir text-white">
      <SiteOverlays />
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-emerald-400/12 bg-emerald-950/58 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-5">
          <a href="#home" className="max-w-[62%] truncate font-heading text-base text-white sm:text-lg lg:text-xl">
            TONI&GUY <span className="text-gold">RPS More Saguna Patna</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-silver lg:flex">
            {["About", "Services", "Offers", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">
                {item}
              </a>
            ))}
          </div>
          <a href="#book" className="inline-flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-xs font-bold text-black transition hover:bg-white sm:px-4 sm:text-sm">
            <CalendarCheck size={17} /> Book
          </a>
        </nav>
      </header>

      <section id="home" className="relative min-h-[92vh] overflow-hidden">
        <Image src="/images/hero-salon.png" alt="Luxury salon interior" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-emerald-950/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_36%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-24 pt-24 sm:px-5 sm:pt-28">
          <div className="fade-up max-w-3xl">
            <div className="flex justify-start sm:justify-start">
              <div className="relative animate-logo-float rounded-3xl border border-emerald-400/30 bg-emerald-950/30 p-3 shadow-[0_0_36px_rgba(34,197,94,0.28)]">
                <span className="absolute -right-2 -top-2 rounded-full border border-emerald-400/40 bg-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-300 shadow-glow">
                  Live
                </span>
                <Image
                  src="/images/toni-guy-logo.png"
                  alt="TONI&GUY logo"
                  width={180}
                  height={180}
                  className="h-20 w-20 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28"
                />
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold">International Hairdressing Excellence</p>
            <h1 className="mt-5 font-heading text-5xl leading-none text-white sm:text-7xl md:text-8xl xl:text-9xl">
              TONI&GUY
              <span className="block text-gold">RPS More Saguna Patna</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-light text-silver sm:text-xl md:text-2xl">Hair • Beauty • Bridal • Color • Nail</p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
              {["/images/insta-1.png", "/images/insta-2.png"].map((src, index) => (
                <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
                  <Image
                    src={src}
                    alt={`Salon showcase ${index + 1}`}
                    fill
                    sizes="(min-width: 640px) 20vw, 45vw"
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#book" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-bold uppercase text-black shadow-glow transition hover:translate-y-[-2px] hover:bg-white">
                <CalendarCheck size={18} /> Book Appointment
              </a>
              <a href="tel:" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-4 text-sm font-bold uppercase text-white transition hover:border-gold hover:text-gold">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
          <a href="#about" className="absolute bottom-8 left-5 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-silver md:flex">
            Scroll <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section id="about" className="deferred-section fade-up-delay px-4 py-16 sm:px-5 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">About Saguna</p>
            <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl md:text-6xl">A polished destination for hair, beauty and bridal craft.</h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-silver">
            <p>
              Designed for the pace of modern Patna, TONI&GUY RPS More Saguna Patna brings premium consultations, refined technical work and calm hospitality into one salon experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Luxury fade", "Image reveal", "Gold glow"].map((item) => (
                <div key={item} className="rounded-md border border-gold/20 bg-white/[0.04] p-4 text-sm font-semibold text-white">
                  <ShieldCheck className="mb-3 text-gold" size={22} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="deferred-section bg-emerald-950/28 px-4 py-16 sm:px-5 sm:py-20 md:py-24">
        <SectionHeading eyebrow="Premium Services" title="Expert care for every occasion." copy="Hair, color, spa, keratin, bridal, makeup, nails and skin services shaped around consultation first." />
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="luxury-card group rounded-lg p-6 transition hover:-translate-y-2 hover:border-gold/55"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <Icon className="text-gold transition group-hover:scale-110" size={34} />
                <h3 className="mt-6 font-heading text-2xl text-white">{service.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-silver">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-gold">
                  Explore <ChevronRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section id="offers" className="deferred-section relative px-4 py-16 sm:px-5 sm:py-20">
        <Image src="/images/marble-gold.png" alt="Black marble with gold detail" fill sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-emerald-950/45" />
        <div className="relative mx-auto grid max-w-6xl gap-8 rounded-lg border border-gold/30 bg-black/55 p-6 backdrop-blur sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold">Grand Opening</p>
            <h2 className="mt-3 font-heading text-4xl sm:text-5xl md:text-7xl">Flat 20% OFF</h2>
            <p className="mt-4 max-w-2xl text-silver">Introductory offer on selected hair, beauty and bridal services for new appointments.</p>
          </div>
          <a href="#book" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-sm font-bold uppercase text-black shadow-glow transition hover:bg-white">
            <Sparkles size={18} /> Book Now
          </a>
        </div>
      </section>

      <section className="deferred-section px-4 py-16 sm:px-5 sm:py-20 md:py-24">
        <SectionHeading eyebrow="Customer Reviews" title="Five-star salon energy." copy="Prepared for Google Reviews API integration, with animated review cards for the launch version." />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
              <Quote className="text-gold" size={28} />
              <div className="mt-5 flex text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-silver">{review.text}</p>
              <p className="mt-5 font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="deferred-section bg-emerald-950/28 px-4 py-16 sm:px-5 sm:py-20 md:py-24">
        <SectionHeading eyebrow="Instagram Feed" title="Latest reels and posts." />
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
          {["/images/insta-1.png", "/images/insta-2.png", "/images/insta-3.png", "/images/insta-4.png"].map((src, index) => (
            <a key={src} href={instagramUrl} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden rounded-lg">
              <Image src={src} alt={`Instagram post ${index + 1}`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/45">
                <Instagram className="opacity-0 transition group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="book" className="deferred-section px-4 py-16 sm:px-5 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">Book Appointment</p>
            <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl md:text-6xl">Reserve your salon experience.</h2>
            <p className="mt-5 text-lg leading-8 text-silver">Submit a booking enquiry and continue on WhatsApp for fast confirmation. Firebase or Supabase can be connected behind this form for live appointment management.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Email notification", "WhatsApp notification", "Service selection", "Date and time"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-silver">
                  <Star className="mb-3 text-gold" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="luxury-card rounded-lg p-5 md:p-8">
            <BookingFormStatic />
          </div>
        </div>
      </section>

      <section id="contact" className="deferred-section bg-emerald-950/28 px-4 py-16 sm:px-5 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Visit TONI&GUY RPS More Saguna Patna." />
            <div className="mt-10 grid gap-4 text-silver">
              <a href="tel:+919430077977" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold/50">
                <Phone className="text-gold" /> Call the salon
              </a>
              <a href="https://wa.me/9430077977" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold/50">
                <CalendarCheck className="text-gold" /> WhatsApp booking
              </a>
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
                <Clock className="text-gold" /> 9:45 AM - 10:00 PM, all days
              </div>
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
                <MapPin className="text-gold" /> 302, Mangalam Rd, near RPS More, Patna
              </div>
              <a href="mailto:Thebig.Honcho@outlook.com" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold/50">
                <Navigation className="text-gold" /> Email the salon
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold/50">
                <Instagram className="text-gold" /> Instagram @{`toniandguypatnaoffical`}
              </a>
              <a href={googleMapsPlaceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold/50">
                <Navigation className="text-gold" /> Search on Google
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-emerald-400/20 bg-black">
            <iframe
              title="TONI&GUY RPS More Saguna Patna map"
              src="https://www.google.com/maps?q=TONI%20%26%20GUY%20-%20PATNA%20I%20SAGUNA%2C%20302%2C%20Mangalam%20Rd%2C%20near%20RPS%20more%2C%20Gadha%20Colony%2C%20Kaliket%20Nagar%2C%20Patna%2C%20Bihar%20801503&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
            <a href={googleMapsDirectionsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 text-sm font-bold uppercase text-gold">
              Get Directions <Navigation size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="deferred-section px-4 py-16 sm:px-5 sm:py-20">
        <SectionHeading eyebrow="Admin Panel Preview" title="Ready for salon operations." copy="Appointments, gallery, offers, stylists, reviews, services and pricing are structured for a Firebase or Supabase dashboard." />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {managementCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <Icon className="text-gold" />
                <p className="mt-5 text-3xl font-bold text-white">{card.value}</p>
                <p className="mt-1 text-sm text-silver">{card.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="deferred-section border-t border-emerald-400/12 px-5 pb-28 pt-10 md:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-silver md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-2xl text-white">TONI&GUY <span className="text-gold">RPS More Saguna Patna</span></p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <a href="#book" className="hover:text-gold">Book Appointment</a>
            <a href="#services" className="hover:text-gold">Services</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
