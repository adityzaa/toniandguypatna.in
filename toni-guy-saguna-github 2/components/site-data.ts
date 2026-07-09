import {
  BadgePercent,
  Brush,
  CalendarCheck,
  Crown,
  Droplets,
  Gem,
  HeartHandshake,
  Paintbrush,
  Scissors,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";

export const services = [
  {
    slug: "haircut",
    title: "Haircut",
    icon: Scissors,
    description: "Precision cuts, luxury consultation and finish for every hair texture.",
    price: "From Rs. 899",
  },
  {
    slug: "hair-color",
    title: "Hair Color",
    icon: Paintbrush,
    description: "Global color, balayage, highlights and gloss treatments with expert care.",
    price: "Consultation led",
  },
  {
    slug: "hair-spa",
    title: "Hair Spa",
    icon: Droplets,
    description: "Deep repair rituals for shine, hydration, smoothness and scalp comfort.",
    price: "From Rs. 1,499",
  },
  {
    slug: "keratin",
    title: "Keratin",
    icon: Sparkles,
    description: "Frizz-control smoothing services with luminous, polished movement.",
    price: "By length",
  },
  {
    slug: "bridal",
    title: "Bridal",
    icon: Crown,
    description: "Complete bridal hair, makeup and styling packages for the full celebration.",
    price: "Package available",
  },
  {
    slug: "skin",
    title: "Skin",
    icon: Gem,
    description: "Glow-focused facials, cleanup services and premium skin rituals.",
    price: "From Rs. 1,299",
  },
  {
    slug: "nails",
    title: "Nails",
    icon: WandSparkles,
    description: "Manicure, pedicure, extensions and refined nail art for every occasion.",
    price: "From Rs. 799",
  },
  {
    slug: "makeup",
    title: "Makeup",
    icon: Brush,
    description: "Occasion, party, editorial and HD makeup with camera-ready finish.",
    price: "From Rs. 2,499",
  },
];

export const experts = [
  {
    name: "Aarav Mehra",
    role: "Senior Stylist",
    experience: "12+ Years Experience",
    image: "/images/expert-1.png",
  },
  {
    name: "Nisha Kapoor",
    role: "Color Specialist",
    experience: "10+ Years Experience",
    image: "/images/expert-2.png",
  },
  {
    name: "Rhea Sinha",
    role: "Bridal Artist",
    experience: "9+ Years Experience",
    image: "/images/expert-3.png",
  },
];

export const reviews = [
  {
    name: "Ananya S.",
    text: "The consultation felt personal, the color was beautifully blended, and the finish looked expensive without feeling overdone.",
  },
  {
    name: "Priya K.",
    text: "Booked for bridal makeup and hair. The team was punctual, calm and incredibly polished through the entire morning.",
  },
  {
    name: "Rohan M.",
    text: "Clean space, sharp haircut and excellent styling advice. Easily one of the best salon experiences near RPS More, Saguna.",
  },
];

export const managementCards = [
  { label: "Appointments", value: "42", icon: CalendarCheck },
  { label: "Offers", value: "4 live", icon: BadgePercent },
  { label: "Reviews", value: "4.9", icon: Star },
  { label: "Stylists", value: "8 active", icon: HeartHandshake },
];
