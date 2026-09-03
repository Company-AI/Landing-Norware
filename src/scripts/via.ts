/**
 * Selector de camino.
 *
 * Hermano de `rubro.ts`, y a propósito: el mismo patrón, el mismo
 * almacenamiento, la misma degradación sin JS. Quien entienda uno
 * entiende el otro.
 *
 * La diferencia entre los dos:
 *
 *   rubro  → QUÉ negocio tiene         (inmobiliaria, taller, …)
 *   via    → A QUÉ VIENE               (ordenar algo / construir algo)
 *
 * Son ejes independientes. Alguien puede tener una inmobiliaria y
 * venir igual a construir un producto nuevo, así que elegir camino
 * no toca el rubro elegido ni al revés.
 *
 * IMPORTANTE: este selector NO esconde secciones de la página.
 * Lo único que cambia es el bloque del hero: la bajada, los botones
 * y el selector de rubro (que solo le sirve al que viene a ordenar).
 * Los dos bloques de botones están en el HTML y se muestran por CSS,
 * así que sin JS igual se ve uno completo y funcionando.
 *
 * Todo el resto de la página sigue entero para los dos caminos: el
 * que baja scrolleando lo ve igual, y el buscador también.
 */

const VIAS = ["ordenar", "construir"] as const;
type Via = (typeof VIAS)[number];

const KEY = "nw-via";

function isVia(v: string | null): v is Via {
    return !!v && (VIAS as readonly string[]).includes(v);
}

function apply(via: Via, opts: { persist?: boolean } = {}) {
    document.documentElement.dataset.via = via;

    document.querySelectorAll<HTMLElement>("[data-via-btn]").forEach((btn) => {
        const on = btn.dataset.viaBtn === via;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-pressed", String(on));
    });

    if (opts.persist !== false) {
        try {
            localStorage.setItem(KEY, via);
        } catch {
            /* modo privado: seguimos igual */
        }
    }
}

function boot() {
    const buttons = Array.from(
        document.querySelectorAll<HTMLElement>("[data-via-btn]")
    );
    if (!buttons.length) return;

    // Prioridad: ?via= en la URL > lo elegido antes > el de por defecto.
    // El parámetro sirve para mandar el link ya encuadrado: alguien que
    // recibe /?via=construir entra directo con la página hablándole a él.
    const fromUrl = new URLSearchParams(location.search).get("via");
    let stored: string | null = null;
    try {
        stored = localStorage.getItem(KEY);
    } catch {
        /* ignorar */
    }

    const inicial: Via = isVia(fromUrl)
        ? fromUrl
        : isVia(stored)
          ? stored
          : "ordenar";

    apply(inicial, { persist: false });

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const v = btn.dataset.viaBtn;
            if (isVia(v)) apply(v);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
    boot();
}
