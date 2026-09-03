/**
 * ============================================================
 * DATOS DE LA HOME (rediseño tipo "content sheet" sobre hero fijo)
 * ============================================================
 *
 * Todo el contenido de la página nueva vive acá: slides del hero,
 * tarjetas de producto, casos, rubros, confianza y resultados.
 * Los textos salen de `negocio.ts` / `estudio.ts` (datos reales,
 * nada inventado). Las FOTOS viven en `/public/images/pf/` y son
 * fotografía de Unsplash (licencia libre, uso comercial permitido),
 * elegidas por contexto: reemplazables por capturas propias cuando
 * las haya, manteniendo el mismo nombre de archivo.
 */

import { whatsappLink } from "./site";

/* ------------------------------------------------------ acentos */

/** Un acento por producto. El resto de la página es neutro cálido. */
export const acentos = {
    inmobiliarias: { chip: "#1F7A6D", texto: "#1F7A6D", suave: "rgba(31,122,109,0.12)" },
    autoficha: { chip: "#C2410C", texto: "#C2410C", suave: "rgba(194,65,12,0.12)" },
    tap: { chip: "#4F46E5", texto: "#4F46E5", suave: "rgba(79,70,229,0.12)" },
    // Verde bosque de la marca real de Mappi (holamappi.com)
    holamappi: { chip: "#3F5B3E", texto: "#3F5B3E", suave: "rgba(63,91,62,0.12)" },
} as const;

/* --------------------------------------------------- hero slides */

export interface HeroSlide {
    id: string;
    /** Etiqueta de la pestaña inferior. */
    tab: string;
    /** Sigla del chip de la pestaña. `null` usa el logo Norware. */
    chip: string | null;
    chipColor: string | null;
    titulo: string;
    sub: string;
    cta: { label: string; href: string };
    /** Foto de fondo. PLACEHOLDER: reemplazar por foto real/generada. */
    foto: string;
    alt: string;
}

export const heroSlides: HeroSlide[] = [
    {
        id: "estudio",
        tab: "El estudio",
        chip: null,
        chipColor: null,
        titulo: "Procesos desordenados, sistemas simples.",
        sub: "Estudio de software en Río Cuarto. Para tu negocio o tu proyecto.",
        cta: { label: "Hacer diagnóstico", href: "#contacto" },
        foto: "/images/pf/hero-estudio.jpg",
        alt: "Escritorio del estudio de noche, con un monitor encendido",
    },
    {
        id: "inmobiliarias",
        tab: "Inmobiliarias",
        chip: "IN",
        chipColor: acentos.inmobiliarias.chip,
        titulo: "Toda tu inmobiliaria, en un solo sistema.",
        sub: "Propiedades, contratos, pagos y vencimientos, sin planillas.",
        cta: { label: "Ver la solución", href: "#productos" },
        foto: "/images/pf/hero-inmobiliaria.jpg",
        alt: "Oficina de una inmobiliaria con una pantalla mostrando el sistema",
    },
    {
        id: "talleres",
        tab: "Talleres y lubricentros",
        chip: "AF",
        chipColor: acentos.autoficha.chip,
        titulo: "El historial de cada vehículo, sin cuaderno.",
        sub: "autoficha360: turnos, services y seguimiento del taller.",
        cta: { label: "Ver autoficha360", href: "#productos" },
        foto: "/images/pf/hero-taller.jpg",
        alt: "Cambio de aceite en un lubricentro",
    },
    {
        id: "comercios",
        tab: "Comercios",
        chip: "NT",
        chipColor: acentos.tap.chip,
        titulo: "Tus clientes vuelven. Ahora lo podés medir.",
        sub: "Norware Tap: fidelización con NFC y QR, sin apps.",
        cta: { label: "Ver Norware Tap", href: "#productos" },
        foto: "/images/pf/hero-comercio.jpg",
        alt: "Mostrador de un comercio con un cliente acercando el celular",
    },
];

/** Milisegundos que dura cada slide del hero antes de pasar al siguiente. */
export const heroIntervalo = 6000;

/* -------------------------------------------- ticker de clientes */

/** Nombres reales (todos con OK para nombrarse en `negocio.ts`). */
export const ticker = [
    "Inmobiliaria Generar",
    "Cl Transmisiones",
    "RepMaq SRL",
    "Makeda Bazar y Deco",
    "Atul Vinos",
    "Kairo Bar",
    "Norware Tap",
    "holamappi",
    "autoficha360",
];

/* ------------------------------------------------- productos home */

export interface ProductoCard {
    id: string;
    chip: string;
    color: keyof typeof acentos;
    nombre: string;
    titulo: string;
    descripcion: string;
    /** Sitio público del producto. En `null` no se muestra link. */
    url: string | null;
}

export const productosHome: ProductoCard[] = [
    {
        id: "inmobiliarias",
        chip: "IN",
        color: "inmobiliarias",
        nombre: "Norware Inmobiliarias",
        url: null,
        titulo: "Sistema para inmobiliarias",
        descripcion:
            "Propiedades, propietarios, inquilinos, contratos, pagos y vencimientos en un solo lugar.",
    },
    {
        id: "autoficha",
        chip: "AF",
        color: "autoficha",
        nombre: "autoficha360",
        url: null,
        titulo: "Talleres y lubricentros",
        descripcion:
            "Turnos, historial de cada vehículo y seguimiento del trabajo del taller.",
    },
    {
        id: "tap",
        chip: "NT",
        color: "tap",
        nombre: "Norware Tap",
        url: null,
        titulo: "Fidelización para comercios",
        descripcion:
            "El cliente acerca el celular, el comercio confirma, el sistema acredita. Sin apps.",
    },
    {
        id: "holamappi",
        chip: "HM",
        color: "holamappi",
        nombre: "holamappi",
        url: "https://holamappi.com",
        titulo: "Identificación para mascotas",
        descripcion:
            "Quien la encuentra acerca el celular y contacta al dueño. No es un GPS: no rastrea nada.",
    },
];

/* ----------------------------------------------- casos (carrusel) */

/**
 * OJO: no hay testimonios textuales aprobados todavía (ver la nota
 * larga en `negocio.ts`). Por eso estas frases son DESCRIPTIVAS,
 * sin comillas: cuentan el antes/después sin ponerle palabras en la
 * boca a nadie. Cuando haya testimonio aprobado, se agrega `quote`.
 */
export interface CasoSlide {
    frase: string;
    empresa: string;
    detalle: string;
    chip: string;
    color: keyof typeof acentos;
    cta: { label: string; href: string };
    /** PLACEHOLDER: reemplazar por foto real/generada. */
    foto: string;
}

export const casosSlides: CasoSlide[] = [
    {
        frase: "De planillas y controles manuales a un solo sistema.",
        empresa: "Inmobiliaria Generar",
        detalle: "Inmobiliaria · Río Cuarto",
        chip: "IN",
        color: "inmobiliarias",
        cta: { label: "Ver la solución", href: "#productos" },
        foto: "/images/pf/caso-inmobiliaria.jpg",
    },
    {
        frase: "El historial de cada vehículo dejó de vivir en la memoria del taller.",
        empresa: "Cl Transmisiones",
        detalle: "Taller de transmisiones · Río Cuarto",
        chip: "AF",
        color: "autoficha",
        cta: { label: "Ver autoficha360", href: "#productos" },
        foto: "/images/pf/caso-taller.jpg",
    },
    {
        frase: "El stock se controla en el sistema, no en un cuaderno.",
        empresa: "RepMaq SRL",
        detalle: "Sistema de stock",
        chip: "IN",
        color: "inmobiliarias",
        cta: { label: "Quiero algo así", href: "#contacto" },
        foto: "/images/pf/caso-stock.jpg",
    },
    {
        frase: "Un copiloto de soporte que nunca le contesta solo al cliente.",
        empresa: "Caso de IA",
        detalle: "Con freno de mano: si falta información, avisa y se frena",
        chip: "IA",
        color: "tap",
        cta: { label: "IA con criterio", href: "#confianza" },
        foto: "/images/pf/caso-ia.jpg",
    },
];

/* --------------------------------------------------------- rubros */

export interface Rubro {
    titulo: string;
    detalle: string;
    cta: { label: string; href: string };
    /** PLACEHOLDER: reemplazar por foto real/generada. */
    foto: string;
}

export const rubros: Rubro[] = [
    {
        titulo: "Inmobiliarias",
        detalle: "Contratos, pagos y vencimientos sin Excel ni carpetas.",
        cta: { label: "Ver solución", href: "#productos" },
        foto: "/images/pf/rubro-inmobiliaria.jpg",
    },
    {
        titulo: "Talleres y lubricentros",
        detalle: "Cada vehículo con su historial, cada turno en su lugar.",
        cta: { label: "Ver solución", href: "#productos" },
        foto: "/images/pf/rubro-taller.jpg",
    },
    {
        titulo: "Comercios",
        detalle: "Clientes que vuelven, medidos con NFC. Sin apps.",
        cta: { label: "Ver solución", href: "#productos" },
        foto: "/images/pf/rubro-comercio.jpg",
    },
    {
        titulo: "Ecommerce y stock",
        detalle: "Pedidos, entregas y stock que coinciden con la realidad.",
        cta: { label: "Ver solución", href: "#productos" },
        foto: "/images/pf/rubro-ecommerce.jpg",
    },
    {
        titulo: "Otro rubro, a medida",
        detalle: "Si depende de planillas y mensajes, hay algo para ordenar.",
        cta: {
            label: "Contar mi caso",
            href: whatsappLink("Hola Norware, mi rubro no está en la lista pero quiero ordenar mi operación."),
        },
        foto: "/images/pf/rubro-amedida.jpg",
    },
];

/* ------------------------------------------------------ confianza */

export const confianza = [
    {
        titulo: "IA donde suma, no por moda",
        detalle:
            "Nuestro caso más complejo es un copiloto de soporte que deja el trabajo adelantado y nunca contesta solo. Si falta información, avisa y se frena.",
    },
    {
        titulo: "Tus datos son tuyos",
        detalle:
            "Si dejás el servicio, te llevás tu información. Sin permanencia mínima ni penalidad.",
    },
    {
        titulo: "El que lo construyó te atiende",
        detalle:
            "Sin mesa de ayuda ni número de ticket. El mismo que hizo el sistema es el que responde cuando algo falla.",
    },
];

/* ----------------------------------------------------- resultados */

export interface Resultado {
    valor: string;
    frase: string;
    autor: string;
    detalle: string;
    /** ancho relativo en desktop: "narrow" | "wide" */
    ancho: "narrow" | "wide";
    /** PLACEHOLDER: reemplazar por foto real/generada. */
    foto: string;
}

export const resultados: Resultado[] = [
    {
        valor: "+34 h",
        frase: "por semana que el equipo dejó de perder en tareas manuales.",
        autor: "Inmobiliaria Generar",
        detalle: "Inmobiliaria · Río Cuarto",
        ancho: "narrow",
        foto: "/images/pf/res-generar.jpg",
    },
    {
        valor: "1 semana",
        frase: "desde que arrancamos hasta que tu equipo lo está usando en el local.",
        autor: "Implementación típica",
        detalle: "Setup, carga y capacitación incluidos",
        ancho: "wide",
        foto: "/images/pf/res-implementacion.jpg",
    },
    {
        // Cifra confirmada por el estudio (sep 2026): más de veinte
        // productos y sistemas propios construidos de punta a punta.
        valor: "+20",
        frase: "productos y sistemas construidos enteros en el estudio.",
        autor: "Productos propios",
        detalle: "Norware Tap, holamappi, autoficha360 y más",
        ancho: "wide",
        foto: "/images/pf/res-productos.jpg",
    },
    {
        valor: "2021",
        frase: "trabajando con pymes de Río Cuarto y zona desde entonces.",
        autor: "El estudio",
        detalle: "Río Cuarto, Córdoba",
        ancho: "narrow",
        foto: "/images/pf/res-estudio.jpg",
    },
];
