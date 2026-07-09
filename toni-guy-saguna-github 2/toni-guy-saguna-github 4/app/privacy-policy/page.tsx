import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for TONI&GUY RPS More Saguna Patna appointment enquiries.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-noir px-6 py-12 text-silver">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          Back to home
        </Link>
        <h1 className="mt-8 font-heading text-4xl text-white md:text-6xl">Privacy Policy</h1>
        <div className="mt-8 space-y-5 leading-8">
          <p>
            TONI&GUY RPS More Saguna Patna collects appointment details such as name, mobile number, preferred service, date, time and message so the salon team can confirm and manage bookings.
          </p>
          <p>
            Enquiry information is used only for service communication, appointment updates, offers opted into by the customer, and operational follow-up.
          </p>
          <p>
            Customer data is not sold. Analytics and map embeds may use standard cookies or device information according to their own platform policies.
          </p>
          <p>
            To request correction or deletion of appointment information, contact the salon directly through the phone, WhatsApp or email links on the website.
          </p>
        </div>
      </div>
    </main>
  );
}
