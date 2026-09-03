/**
 * ============================================================
 * EL ESTUDIO — quiénes somos y qué construimos
 * ============================================================
 *
 * Este archivo sostiene el segundo camino de la página: el
 * visitante que no viene con un negocio para ordenar sino con
 * un proyecto para construir.
 *
 * Rige la misma regla que en `negocio.ts`: lo que no se puede
 * verificar va en `null` y la sección se dibuja sin eso. Nada
 * de acá es una estimación optimista. Cada capacidad y cada
 * producto listado abajo existe, con código, en el repo.
 *
 *   >>> LO ÚNICO PENDIENTE DE CONFIRMAR: `estudio.desde`. <<<
 *   Ver la nota larga sobre ese campo unas líneas más abajo.
 */

/* ------------------------------------------------------ estudio */

export const estudio = {
    /**
     * Año en que arrancó Norware. Confirmado por el estudio.
     *
     * Si algún día se prefiere no hablar de antigüedad, poner `null`:
     * la página deja de mencionar años en todos lados (hero, estudio,
     * footer y datos estructurados) sin romperse.
     */
    desde: 2021 as number | null,

    ciudad: "Río Cuarto, Córdoba",

    /**
     * Cuánta gente es el estudio. En `null` no se menciona.
     * No lo inflés: un cliente que pregunta y escucha otro número
     * pierde la confianza que ganó todo el resto de la página.
     */
    equipo: null as number | null,
};

/** Años cumplidos desde el arranque, o `null` si no hay año cargado. */
export function aniosDeExperiencia(hoy = new Date()): number | null {
    if (estudio.desde === null) return null;
    return Math.max(0, hoy.getFullYear() - estudio.desde);
}

/** "desde 2024" o `null`. Para las líneas cortas del hero y el footer. */
export function desdeTexto(): string | null {
    return estudio.desde === null ? null : `desde ${estudio.desde}`;
}

/* -------------------------------------------------- capacidades */

/**
 * Qué sabemos construir. Cada punto está respaldado por código
 * que ya existe; entre paréntesis, dónde se puede verificar.
 * Si algún día hay que sacar uno porque dejó de ser cierto,
 * se saca de acá y desaparece de la página.
 */
export interface Capacidad {
    id: string;
    titulo: string;
    detalle: string;
    /** Tecnologías reales, no una nube de logos. */
    stack: string[];
}

export const capacidades: Capacidad[] = [
    {
        id: "apps",
        titulo: "Sistemas de gestión completos",
        detalle:
            "Donde tu equipo trabaja todos los días.",
        stack: ["Laravel", "Vue", "Next.js", "TypeScript"],
    },
    {
        id: "multitenant",
        titulo: "Cada uno ve lo que le toca",
        detalle:
            "El empleado ve su parte. Vos ves todo.",
        stack: ["PostgreSQL", "MySQL", "Prisma"],
    },
    {
        id: "nfc",
        titulo: "Etiquetas que abren el sistema",
        detalle:
            "Acercás el celular y arranca. Sin apps.",
        stack: ["NFC", "QR", "Web NFC"],
    },
    {
        id: "integraciones",
        titulo: "Cobros, avisos y conexiones",
        detalle:
            "Cobros online, WhatsApp, avisos al celular.",
        stack: ["Mercado Pago", "WhatsApp", "Web Push", "APIs"],
    },
    {
        id: "infra",
        titulo: "Te lo dejamos andando",
        detalle:
            "Con dominio, seguro y respaldo diario.",
        stack: ["Docker", "Postgres", "Caddy", "Nginx"],
    },
    {
        id: "ia",
        titulo: "IA donde de verdad ahorra",
        detalle:
            "Solo donde ahorra horas de verdad.",
        stack: ["OpenAI", "Node", "Colas en Postgres"],
    },
];

/* ------------------------------------------------------- oficio */

/**
 * Cómo se construye acá adentro. Esto es lo que de verdad
 * sostiene la frase "tenemos experiencia": no una cifra de años,
 * sino prácticas que se pueden mirar en el código.
 */
export const oficio = [
    {
        titulo: "Si algo se rompe, avisa antes que el cliente",
        detalle:
            "El sistema se revisa solo cada vez que lo tocamos. Los errores los encontramos nosotros, no vos un lunes a la mañana.",
    },
    {
        titulo: "Las decisiones quedan escritas",
        detalle:
            "Por qué está hecho así queda anotado. Si mañana lo toma otra persona, no arranca adivinando.",
    },
    {
        titulo: "No desaparecemos después",
        detalle:
            "El mismo que lo construyó es el que te atiende cuando algo falla. Sin mesa de ayuda ni número de ticket.",
    },
    {
        titulo: "Se entrega andando",
        detalle:
            "Con tu información ya adentro y tu equipo capacitado. Termina cuando lo están usando, no cuando lo entregamos.",
    },
];

/* ----------------------------------------------------- productos */

/**
 * Productos propios: los construimos enteros, sin cliente que nos
 * marque el alcance. Son la prueba más honesta de lo que podemos
 * hacer, porque no hay nada que atribuirle a otro equipo.
 *
 * `noHace` no es un descargo legal: en los dos casos, decir lo que
 * el producto NO hace es parte del producto y está escrito así en
 * su propia documentación. Es exactamente lo contrario a vender humo,
 * y por eso ocupa un lugar destacado en la tarjeta.
 */
export interface Producto {
    id: string;
    nombre: string;
    /** Una línea. Qué es, para quién. */
    resumen: string;
    /** Dos o tres frases. Cómo funciona de verdad. */
    descripcion: string;
    /** La decisión de diseño que lo define. Sale de su documentación. */
    decision: { titulo: string; texto: string };
    /** Lo que el producto NO hace, dicho por adelantado. */
    noHace: string | null;
    stack: string[];
    /**
     * Estado real. Se muestra tal cual: no escribas "en producción"
     * si todavía no hay un comercio usándolo.
     */
    estado: string;
    /** Link público. En `null` no se muestra botón. */
    url: string | null;
    tone: "order" | "depth";
}

export const productos: Producto[] = [
    {
        id: "tap",
        nombre: "Norware Tap",
        resumen: "Fidelización con NFC y QR para comercios físicos.",
        descripcion:
            "El cliente acerca el celular, el comercio confirma, el sistema acredita.",
        decision: {
            titulo: "Tocar el tag no acredita nada",
            texto:
                "Copiar el link del sticker no suma nada: sin un empleado que confirme, no hay visita.",
        },
        noHace: null,
        stack: ["Laravel 12", "Inertia", "Vue", "MySQL", "NFC", "QR"],
        estado: "Entregado y en uso",
        url: null,
        tone: "order",
    },
    {
        id: "holamappi",
        nombre: "holamappi",
        resumen: "Identificación con NFC y QR para mascotas.",
        descripcion:
            "Quien la encuentra acerca el celular y puede contactar al dueño.",
        decision: {
            titulo: "La privacidad es del que encuentra",
            texto:
                "La ubicación aparece solo si quien la encontró decide compartirla.",
        },
        noHace: "No es un GPS. No rastrea nada.",
        stack: [
            "Next.js 15",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Mercado Pago",
            "Web Push",
        ],
        estado: "En producción, con usuarios",
        url: "https://holamappi.com",
        tone: "depth",
    },
];

/* ------------------------------------------------- caso de IA */

/**
 * El trabajo con IA más complejo que hicimos. Se describe la
 * capacidad sin nombrar a la empresa donde corre, que es lo
 * correcto mientras no haya un OK explícito para nombrarla.
 *
 * ⚠️ Si preferís no mostrarlo todavía, poné `publicable: false`
 * y la sección de IA vuelve a su versión anterior sin romperse.
 */
export const casoIA = {
    publicable: true,
    titulo: "Un copiloto de soporte, con freno de mano",
    resumen:
        "Lee los reclamos de una empresa y le deja al equipo el trabajo adelantado. Nunca le contesta al cliente.",
    /** Lo único que hay que retener del bloque entero. */
    freno:
        "Si el reclamo no trae información suficiente, no se inventa nada: avisa qué falta y se frena.",
};
