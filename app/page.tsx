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
    symbol: "✽",
  },
];

function Icon({ type }: { type: string }) {
  if (type === "people") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M23 29c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9Z" />
        <path d="M41 31c4 0 7-3 7-7s-3-7-7-7" />
        <path d="M8 53c2-10 8-16 15-16s13 6 15 16" />
        <path d="M38 40c7 1 12 6 14 13" />
        <path d="M32 49s-9-5-9-12c0-3 2-5 5-5 2 0 4 1 4 3 1-2 3-3 5-3 3 0 5 2 5 5 0 7-10 12-10 12Z" className="icon-fill" />
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
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 23c3-7 9-11 16-12 4-1 8 0 13 3l10 6-3 8 5 4-8 6 3 9-8 5-9-5-7 4-5-8-9-1 2-9-5-5 5-5Z" />
        <path d="M34 42s-6-4-6-9c0-3 2-5 5-5 1 0 3 1 4 3 1-2 3-3 5-3 3 0 5 2 5 5 0 5-6 9-6 9l-4 3-3-3Z" className="icon-fill" />
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
      await fetch(process.env.NEXT_PUBLIC_WAITLIST_URL as string, {
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
      <section className="hero-art" aria-label="Mercado Querido">
        <img
          src="/assets/hero-approved-padded.webp"
          alt="Mercado Querido. Hecho o diseñado en México. Próximamente en Verano 2027."
        />
        <div className="seo-copy">
          <h1>Mercado Querido</h1>
          <p>Próximamente en verano de 2027.</p>
          <p>Un marketplace que celebra el talento, la tradición y la creatividad de México.</p>
        </div>
      </section>

      <section className="market-section">
        <div className="section-inner">
          <div className="statement-block">
            <p className="small-caps">Marketplace curado</p>
            <h2>
              Un marketplace de compradores y vendedores,
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
