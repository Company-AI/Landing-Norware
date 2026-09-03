/**
 * ============================================================
 * ESTRUCTURA DE LA PÁGINA — una sola fuente de verdad
 * ============================================================
 *
 * Antes el orden de la página vivía en tres lugares a la vez: el
 * `index.astro`, la lista de links del riel y un `index="0X"`
 * escrito a mano en cada sección. Mover una sección obligaba a
 * acordarse de los tres, y el denominador ("/ 09") quedaba viejo
 * apenas se agregaba una.
 *
 * Ahora se declara acá y todo lo demás lo deriva.
 *
 * LOS DOS CAMINOS
 * ---------------
 * La página le habla a dos visitantes distintos:
 *
 *   "ordenar"    — tiene un negocio andando entre planillas,
 *                  WhatsApp y papeles, y quiere ordenarlo.
 *   "construir"  — tiene un proyecto, un producto o una idea y
 *                  necesita un equipo que la lleve a producción.
 *
 * El visitante elige en el hero. Ese click NO esconde secciones:
 * define a dónde lo lleva el botón principal y qué se resalta.
 * Todo el contenido sigue en el HTML para el que baja scrolleando
 * y para el buscador.
 *
 * Las secciones "comun" cierran para los dos: son la prueba y el
 * contacto.
 */

export type Camino = "ordenar" | "construir";

export interface Seccion {
    /** id del <section>. Es también el ancla. */
    id: string;
    /** Texto del riel lateral y del índice en móvil. */
    rail: string;
    /** A qué visitante le habla. `null` = a los dos. */
    camino: Camino | null;
}

export const secciones: Seccion[] = [
    /*
     * ── El que viene a ordenar su negocio ──────────────────────
     *
     * Quedaron dos: qué ofrecemos y a quién ya le funcionó. Antes
     * este tramo eran cinco secciones y decía tres veces lo mismo.
     */
    { id: "soluciones", rail: "Qué ofrecemos", camino: "ordenar" },
    { id: "caso-real", rail: "Caso real", camino: "ordenar" },

    /*
     * ── El que viene con un proyecto para construir ────────────
     *
     * Una sola: primero lo que ya existe, después lo que sabemos
     * hacer. Para este visitante la prueba no es un cliente sino
     * los productos que construimos enteros.
     */
    { id: "estudio", rail: "El estudio", camino: "construir" },

    // ── Para los dos: método, postura y contacto
    { id: "proceso", rail: "Cómo trabajamos", camino: null },
    { id: "ia", rail: "IA con criterio", camino: null },
    { id: "faq", rail: "Preguntas", camino: null },
    { id: "diagnostico", rail: "Diagnóstico", camino: null },
];

/*
 * La numeración visible ("01 / 10") se sacó junto con el riel: era
 * vocabulario de documentación técnica y no le decía nada al visitante.
 * Este archivo sigue siendo la fuente del ORDEN y de los dos caminos,
 * que es lo que de verdad usa la página.
 */

/** Primera sección de un camino: a dónde lleva el botón del hero. */
export function inicioDe(camino: Camino): string {
    const s = secciones.find((x) => x.camino === camino);
    return `#${s ? s.id : "diagnostico"}`;
}

/**
 * Los caminos como los ve el visitante en el hero.
 * El texto de acá y el del hero son el mismo: se escribe una vez.
 */
export const caminos = [
    {
        id: "ordenar" as const,
        label: "Tengo un negocio para ordenar",
        detalle: "Planillas, WhatsApp y papeles que no dan más.",
        /** Bajada del hero cuando este camino está elegido. */
        bajada:
            "Lo ordenamos con un sistema hecho para tu operación, no con uno genérico al que tengas que adaptarte.",
        cta: "Ver cómo se ve",
    },
    {
        id: "construir" as const,
        label: "Tengo un proyecto para construir",
        detalle: "Un producto, una app o una integración que todavía no existe.",
        bajada:
            "La construimos entera: diseño, backend, frontend, puesta en producción y soporte. Y la dejamos andando.",
        cta: "Ver qué construimos",
    },
];

/** El camino que se muestra si el visitante todavía no eligió. */
export const caminoPorDefecto: Camino = "ordenar";
