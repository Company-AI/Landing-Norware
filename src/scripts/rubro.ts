/**
 * Selector de rubro.
 *
 * El primer problema de la página era que le hablaba a cuatro públicos
 * a la vez. Acá el visitante dice qué tiene y la página se acomoda:
 * cambia la bajada del hero, la pantalla de producto y, si toca
 * "ver la solución", lo lleva a su tarjeta y la resalta.
 *
 * Sin JS queda visible el primer rubro (estado válido, no roto).
 */

const RUBROS = ["inmobiliarias", "talleres", "ecommerce", "a-medida"] as const;
type Rubro = (typeof RUBROS)[number];

const KEY = "nw-rubro";

function isRubro(v: string | null): v is Rubro {
  return !!v && (RUBROS as readonly string[]).includes(v);
}

function apply(rubro: Rubro, opts: { persist?: boolean } = {}) {
  document.documentElement.dataset.rubro = rubro;

  document.querySelectorAll<HTMLElement>("[data-rubro-btn]").forEach((btn) => {
    const on = btn.dataset.rubroBtn === rubro;
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-pressed", String(on));
  });

  if (opts.persist !== false) {
    try {
      localStorage.setItem(KEY, rubro);
    } catch {
      /* modo privado: seguimos igual */
    }
  }
}

function boot() {
  const buttons = Array.from(
    document.querySelectorAll<HTMLElement>("[data-rubro-btn]")
  );
  if (!buttons.length) return;

  // Prioridad: ?rubro= en la URL > lo elegido antes > el primero.
  const fromUrl = new URLSearchParams(location.search).get("rubro");
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch {
    /* ignorar */
  }

  const inicial: Rubro = isRubro(fromUrl)
    ? fromUrl
    : isRubro(stored)
      ? stored
      : "inmobiliarias";

  apply(inicial, { persist: false });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const r = btn.dataset.rubroBtn;
      if (isRubro(r)) apply(r);
    });
  });

  // "Ver la solución para mi rubro": lleva a la tarjeta y la resalta.
  document.querySelectorAll<HTMLAnchorElement>("[data-rubro-go]").forEach((link) => {
    link.addEventListener("click", (e) => {
      const r = document.documentElement.dataset.rubro;
      if (!isRubro(r ?? null)) return;
      const card = document.getElementById(r as string);
      if (!card) return;
      e.preventDefault();
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.remove("is-target");
      // Reinicia la animación aunque ya se haya disparado antes.
      void card.offsetWidth;
      card.classList.add("is-target");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
