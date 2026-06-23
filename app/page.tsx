"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

const values = [
 {
  label: "Conectamos",
  copy: "Personas que valoran lo auténtico con vendedores que crean con intención.",
  icon: "people",
 },
 {
  label: "Moderamos",
  copy: "Una experiencia curada para mantener confianza, calidad y seguridad.",
  icon: "shield",
 },
 {
  label: "Apoyamos",
  copy: "Impulsamos a artesanos, productores y coleccionistas mexicanos.",
  icon: "heart",
 },
 {
  label: "Celebramos",
  copy: "Lo hecho o diseñado en México: cultura, raíces, diseño y oficio.",
  icon: "mexico",
 },
];

const categories = [
 {
  title: "Productos artesanales",
  subtitle: "Hechos con pasión",
  src: "/assets/card-artesania.webp",
  alt: "Cerámica artesanal mexicana estilo Talavera",
  tone: "navy",
  symbol: "✽",
 },
 {
  title: "Alimentos regionales",
  subtitle: "Sabores de nuestro país",
  src: "/assets/card-alimentos.webp",
  alt: "Alimentos regionales mexicanos en frascos artesanales",
  tone: "green",
  symbol: "▵",
 },
 {
  title: "Artículos vintage",
  subtitle: "Tesoros con historia",
  src: "/assets/card-vintage-final.png",
  alt: "Cámara, cartel de cine mexicano y piezas vintage",
  tone: "terracotta",
  symbol: "✺",
 },
];

function Icon({ type }: { type: string }) {
 if (type === "people") {
  return (
   <svg viewBox="0 0 100 64" aria-hidden="true">
    <circle cx="31" cy="17" r="8" />
    <circle cx="69" cy="17" r="8" />
    <path d="M17 52c1-14 9-23 22-23" />
    <path d="M83 52c-1-14-9-23-22-23" />
    <path d="M39 36c4-7 17-7 22 0" />
    <path d="M42 43c5 6 12 6 17 0" />
    <circle cx="50" cy="29" r="3.5" className="icon-fill" />
   </svg>
  );
 }

 if (type === "shield") {
  return (
   <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 6 52 14v16c0 14-8 24-20 28C20 54 12 44 12 30V14L32 6Z" />
    <path d="M22 32 29 39 43 24" />
   </svg>
  );
 }

 if (type === "mexico") {
  return (
   <svg viewBox="0 0 100 64" aria-hidden="true">
    <path d="M17 14h9l11 7h18l8 10c2 3 7 0 10 4l5 10 9-3 5 7-8 7-10 2-5-4-7 7-8-5-12-3-11-7-7-13-8-6 4-5-3-8Z" />
    <path d="M28 20c2 10 7 19 15 29" />
    <circle cx="58" cy="41" r="3.5" className="icon-fill" />
   </svg>
  );
 }

 return (
  <svg viewBox="0 0 64 64" aria-hidden="true">
   <path d="M32 53s-20-11-20-27c0-7 5-12 12-12 4 0 7 2 8 5 2-3 5-5 9-5 7 0 12 5 12 12 0 16-21 27-21 27Z" className="icon-fill" />
  </svg>
 );
}

export default function Home() {
 const [status, setStatus] = useState<SubmitState>("idle");

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setStatus("loading");

  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();

  try {
   await fetch((process.env.NEXT_PUBLIC_WAITLIST_URL || "https://script.google.com/macros/s/AKfycbzEdzXS7mosjRnEnG63wD5n4KS1dkHeDfmLwosD2ePZQG_fxAOKunAQ_iIzyADpnPUpJw/exec") as string, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     name: "",
     email,
     interest: "Lista de espera",
     message: "Registro desde la landing page de Mercado Querido",
    }),
   });

   form.reset();
   setStatus("success");
  } catch {
   setStatus("error");
  }
 }

 return (
  <main>

     <div className="hero-art-desktop">
      <img src="/assets/hero-approved.webp" alt="Mercado Querido" />
     </div>
     <div className="hero-art-mobile">
      <img src="/assets/hero-mobile-banner.webp" alt="Mercado Querido" />
     </div>
<section className="market-section">
    <div className="section-inner">
     <div className="statement-block">
      <p className="small-caps"></p>
      <h2>
       Un mercado de compradores y vendedores,
       <span> moderado por la plataforma.</span>
      </h2>
     </div>

     <div className="values-grid" aria-label="Valores de Mercado Querido">
      {values.map((item) => (
       <article className="value-card" key={item.label}>
        <div className="value-icon"><Icon type={item.icon} /></div>
        <h3>{item.label}</h3>
        <p>{item.copy}</p>
       </article>
      ))}
     </div>
    </div>
   </section>

     <section className="mobile-hero-copy" aria-label="Mercado Querido introduction">
      <p className="mobile-hero-kicker">HECHO O DISEÑADO EN MÉXICO</p>
      <h1>Lo auténtico <span>nos conecta.</span></h1>
      <p className="mobile-hero-body">
       Un mercado que celebra el talento, la tradición y la creatividad de México.
      </p>
      <p className="mobile-hero-date">
       <em>Próximamente en</em>
       <strong>Verano 2027</strong>
      </p>
     </section>

<section className="discover-section">
    <div className="section-inner">
     <div className="discover-heading">
      <span aria-hidden="true">✦</span>
      <h2>Descubre lo que encontrarás</h2>
      <span aria-hidden="true">✦</span>
     </div>

     <div className="category-grid">
      {categories.map((category) => (
       <article className={`category-card category-card--${category.tone}`} key={category.title}>
        <div className="category-photo">
         <img src={category.src} alt={category.alt} />
        </div>

        <div className="category-badge" aria-hidden="true">
         {category.symbol}
        </div>

        <div className="category-text">
         <h3>{category.title}</h3>
         <p>{category.subtitle}</p>
        </div>
       </article>
      ))}
     </div>
    </div>
   </section>

   <section className="waitlist-section" id="lista-de-espera">
    <div className="waitlist-shell">
     <div className="waitlist-copy">
      <p className="small-caps">Lista de espera</p>
      <h2>Sé el primero en enterarte.</h2>
      <p>
       Suscríbete para recibir noticias, avances y acceso exclusivo al lanzamiento de Mercado Querido.
      </p>
     </div>

     <form className="waitlist-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="sr-only">Tu correo electrónico</label>
      <input
       id="email"
       name="email"
       type="email"
       placeholder="Tu correo electrónico"
       required
       autoComplete="email"
      />
      <button type="submit" disabled={status === "loading"}>
       {status === "loading" ? "Enviando..." : "Quiero enterarme"}
      </button>
      {status === "success" && (
       <p className="form-status success">Listo. Gracias por unirte a la lista de espera.</p>
      )}
      {status === "error" && (
       <p className="form-status error">No pudimos guardar tu correo. Inténtalo de nuevo.</p>
      )}
     </form>
    </div>
    <p className="closing-line">♡ Hecho con amor en México, para el mundo.</p>
   </section>

   <footer className="site-footer">
    <p>© 2026 Mercado Querido. Próximamente en verano de 2027.</p>
   </footer>
  </main>
 );
}
