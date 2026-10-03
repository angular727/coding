"use client";
import { useState } from "react";

const field = "w-full rounded-2xl border border-line bg-white/[.04] px-5 py-4 text-[15px] text-ink outline-none transition placeholder:text-mute/70 focus:border-blue focus:bg-white/[.07] focus:ring-4 focus:ring-blue/15";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nInterested in: ${f.get("topic")}\n\n${f.get("message")}`;
    window.location.href = `mailto:info@codinghub.com?subject=${encodeURIComponent(`Enquiry from ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="card space-y-3 rounded-[28px] p-6 md:p-9">
      <h2 className="t-h2 mb-3">Send us a message</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="phone" placeholder="Phone (optional)" className={field} />
      </div>
      <select name="topic" className={`${field} [&>option]:bg-panel`} defaultValue="Web application">
        {["Web application", "Mobile app", "IoT solution", "AI integration", "Website", "Business automation", "A product demo"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <textarea name="message" required rows={5} placeholder="Tell us about your business and what you want to achieve" className={field} />
      <button data-magnetic className="btn-primary w-full rounded-full px-8 py-4 text-sm font-semibold text-white transition">Send message ↗</button>
      {sent && <p className="pt-1 text-center text-xs text-mute">Your email app will open with the message ready to send to info@codinghub.com.</p>}
    </form>
  );
}
