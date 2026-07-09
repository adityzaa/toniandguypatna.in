import { CalendarDays, CheckCircle2, Clock, MessageSquare, Phone, Send, User } from "lucide-react";
import { services } from "./site-data";

export function BookingFormStatic() {
  const inputClass =
    "h-12 w-full rounded-md border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition focus:border-gold focus:bg-white/[0.09]";

  return (
    <form action="mailto:Thebig.Honcho@outlook.com" method="post" encType="text/plain" className="grid gap-4 md:grid-cols-2">
      <label className="space-y-2">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase text-silver">
          <User size={15} /> Name
        </span>
        <input name="name" required className={inputClass} placeholder="Your name" />
      </label>
      <label className="space-y-2">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase text-silver">
          <Phone size={15} /> Mobile
        </span>
        <input name="mobile" required minLength={10} className={inputClass} placeholder="+91" />
      </label>
      <label className="space-y-2">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase text-silver">
          <CheckCircle2 size={15} /> Service
        </span>
        <select name="service" required className={inputClass} defaultValue="">
          <option value="">Choose service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title} className="bg-noir">
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase text-silver">
            <CalendarDays size={15} /> Date
          </span>
          <input name="date" type="date" required className={inputClass} />
        </label>
        <label className="space-y-2">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase text-silver">
            <Clock size={15} /> Time
          </span>
          <input name="time" type="time" required className={inputClass} />
        </label>
      </div>
      <label className="space-y-2 md:col-span-2">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase text-silver">
          <MessageSquare size={15} /> Message
        </span>
        <textarea name="message" className={`${inputClass} min-h-28 py-3`} placeholder="Occasion, preferred stylist or notes" />
      </label>
      <button
        type="submit"
        className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-4 text-sm font-bold uppercase text-black shadow-glow transition hover:translate-y-[-2px] hover:bg-white"
      >
        <Send size={17} /> Book Now
      </button>
    </form>
  );
}
