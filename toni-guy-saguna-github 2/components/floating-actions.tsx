import { CalendarCheck, Mail, MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  const actions = [
    { label: "WhatsApp", href: "https://wa.me/9430077977", icon: MessageCircle },
    { label: "Call", href: "tel:+919430077977", icon: Phone },
    { label: "Email", href: "mailto:Thebig.Honcho@outlook.com", icon: Mail },
    { label: "Book", href: "#book", icon: CalendarCheck },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center justify-between rounded-md border border-emerald-400/30 bg-emerald-950/88 p-2 shadow-glow backdrop-blur md:left-auto md:right-5 md:w-auto md:max-w-none md:translate-x-0 md:flex-col">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            aria-label={action.label}
            title={action.label}
            className="flex h-11 min-w-20 items-center justify-center gap-2 rounded-md px-3 text-xs font-semibold uppercase text-white transition hover:bg-emerald-300 hover:text-black md:min-w-11"
          >
            <Icon size={18} />
            <span className="md:hidden">{action.label}</span>
          </a>
        );
      })}
    </div>
  );
}
