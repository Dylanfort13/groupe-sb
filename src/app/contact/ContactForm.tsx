"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      division: (form.elements.namedItem("division") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-light-card border border-charcoal/20 rounded-sm p-12 text-center">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className="mx-auto mb-4" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
        <h3 className="font-display text-3xl text-light-text mb-3">MESSAGE ENVOYÉ!</h3>
        <p className="text-light-muted">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="text-xs font-bold tracking-[0.1em] uppercase text-light-muted">Prénom <span className="text-orange">*</span></label>
        <input type="text" id="firstName" name="firstName" required autoComplete="given-name" className="font-body text-sm px-4 py-3 border-2 border-charcoal/30 rounded-sm bg-light-bg text-light-text outline-none focus:border-orange transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName" className="text-xs font-bold tracking-[0.1em] uppercase text-light-muted">Nom <span className="text-orange">*</span></label>
        <input type="text" id="lastName" name="lastName" required autoComplete="family-name" className="font-body text-sm px-4 py-3 border-2 border-charcoal/30 rounded-sm bg-light-bg text-light-text outline-none focus:border-orange transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-bold tracking-[0.1em] uppercase text-light-muted">Courriel <span className="text-orange">*</span></label>
        <input type="email" id="email" name="email" required autoComplete="email" className="font-body text-sm px-4 py-3 border-2 border-charcoal/30 rounded-sm bg-light-bg text-light-text outline-none focus:border-orange transition-colors" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-xs font-bold tracking-[0.1em] uppercase text-light-muted">Téléphone</label>
        <input type="tel" id="phone" name="phone" autoComplete="tel" className="font-body text-sm px-4 py-3 border-2 border-charcoal/30 rounded-sm bg-light-bg text-light-text outline-none focus:border-orange transition-colors" />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="division" className="text-xs font-bold tracking-[0.1em] uppercase text-light-muted">Division concernée <span className="text-orange">*</span></label>
        <select id="division" name="division" required defaultValue="" className="font-body text-sm px-4 py-3 border-2 border-charcoal/30 rounded-sm bg-light-bg text-light-text outline-none focus:border-orange transition-colors">
          <option value="" disabled>Sélectionnez une division…</option>
          <option value="construction">Construction SB</option>
          <option value="deneigement">Déneigement SB</option>
          <option value="location">Location Expert</option>
          <option value="pieux">Pieux Vistech Chibougamau</option>
          <option value="transport">Transport SB</option>
          <option value="cafe">Café Marc Robitaille</option>
          <option value="general">Général (Groupe SB)</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="text-xs font-bold tracking-[0.1em] uppercase text-light-muted">Décrivez votre projet <span className="text-orange">*</span></label>
        <textarea id="message" name="message" required rows={5} className="font-body text-sm px-4 py-3 border-2 border-charcoal/30 rounded-sm bg-light-bg text-light-text outline-none focus:border-orange transition-colors resize-y min-h-[130px]" />
      </div>
      {error && (
        <div className="sm:col-span-2 text-sm text-red-500">{error}</div>
      )}
      <div className="sm:col-span-2">
        <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-orange text-white text-sm font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-sm border-2 border-orange hover:bg-orange-dark hover:border-orange-dark transition-all duration-200 touch-manipulation cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          {loading ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
