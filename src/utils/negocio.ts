/**
 * ============================================================
 * DATOS COMERCIALES — completar antes de publicar
 * ============================================================
 *
 * Todo lo que está en `null` acá es información que no se puede
 * inventar: precios, plazos, testimonios. Mientras siga en `null`,
 * la web muestra una versión honesta de esa sección (sin cifras
 * ni promesas). Al completarlo, la sección aparece sola.
 *
 * Prioridad de impacto, de mayor a menor:
 *   1. site.whatsappNumber (en `site.ts`) — hoy es un placeholder y
 *      el botón más importante de la página no lleva a ningún lado.
 *   2. precio.abonoDesde / precio.setupDesde
 *   3. implementacionSemanas
 *   4. casos[].metrica y casos[].testimonio
 */

export type Rubro = "inmobiliarias" | "talleres" | "ecommerce" | "a-medida";

/* ------------------------------------------------------- precio */

export const precio = {
    /** Setup inicial mínimo. Ej: 350000 */
    setupDesde: null as number | null,
    /** Abono mensual mínimo. Ej: 90000 */
    abonoDesde: null as number | null,
    moneda: "ARS",
    /** Nota corta al pie del bloque de precio. */
    nota: "El número final depende del rubro y del alcance. Lo cerramos en la primera charla, sin vueltas.",
};

/** Cuánto tarda en estar andando. `titulo` es lo que se ve grande. */
export const implementacion: { titulo: string; detalle: string } | null = {
    titulo: "Menos de una semana",
    detalle: "Desde que arrancamos hasta que tu equipo lo está usando en el local.",
};

export function formatoPrecio(valor: number): string {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: precio.moneda,
        maximumFractionDigits: 0,
    }).format(valor);
}

export const hayPrecio = precio.abonoDesde !== null || precio.setupDesde !== null;

/* -------------------------------------------------------- casos */

export interface Caso {
    empresa: string;
    /**
     * Rubro, ciudad y resumen son opcionales a propósito.
     *
     * La lista "También trabajan con nosotros" solo necesita el nombre.
     * Antes eran obligatorios y eso empujaba a rellenarlos de memoria
     * para poder sumar un cliente: justo lo que esta web no hace. Ahora
     * un cliente se puede nombrar hoy y completar cuando el dato esté.
     */
    rubro?: string;
    ciudad?: string;
    resumen?: string;
    /** Cómo se llama lo que se le entregó, si tiene nombre propio. */
    sistema?: string;
    /** Dueño o referente. Se muestra junto al nombre de la empresa. */
    duenio?: string;
    /** Si están los tres, se muestra el tríptico Antes / Solución / Después. */
    antes?: string;
    solucion?: string;
    despues?: string;
    /**
     * IMPORTANTE: publicar el nombre de un cliente (y más aún el de su dueño)
     * necesita su OK explícito. Poner en `true` solo cuando lo tengas.
     */
    autorizado: boolean;
    /** Completar cuando haya testimonio autorizado, con la frase textual. */
    testimonio: { texto: string; autor: string } | null;
    /** Un dato concreto y verificable. */
    metrica: { valor: string; detalle: string } | null;
}

export const casos: Caso[] = [
    {
        empresa: "Inmobiliaria Generar",
        rubro: "Inmobiliaria",
        ciudad: "Río Cuarto",
        sistema: "Sistema de gestión inmobiliaria",
        resumen:
            "Implementamos un sistema para centralizar la gestión diaria y reducir la dependencia de planillas.",
        antes: "La gestión dependía de planillas, mensajes y controles manuales.",
        solucion:
            "Sistema centralizado para administrar propiedades, propietarios, inquilinos, contratos, pagos y vencimientos.",
        despues:
            "Más orden, mejor seguimiento y una operación más clara en el día a día.",
        duenio: "Cristian Guzmán",
        autorizado: true,
        /*
         * TESTIMONIO — PENDIENTE, A PROPÓSITO.
         *
         * No se puede publicar una frase entrecomillada que Cristian no dijo:
         * es ponerle palabras en la boca a una persona real y el visitante lo
         * lee como textual. Lo correcto es mandarle una de estas tres, que
         * elija o corrija, y pegar acá la que apruebe.
         *
         *  A. "Antes teníamos todo en planillas y siempre había que
         *      preguntarle a alguien. Ahora está todo en un solo lugar."
         *  B. "Dejamos de perder tiempo buscando información. Eso solo ya
         *      justificó el cambio."
         *  C. "Lo que más valoro es que entendieron cómo trabajamos antes de
         *      proponernos nada."
         *
         * Cuando confirme:
         * testimonio: { texto: "…", autor: "Cristian Guzmán, dueño — Inmobiliaria Generar" },
         */
        testimonio: null,
        metrica: {
            valor: "+34 h",
            detalle: "por semana que el equipo dejó de perder en tareas manuales",
        },
    },
    {
        empresa: "Cl Transmisiones",
        rubro: "Taller de transmisiones",
        ciudad: "Río Cuarto",
        sistema: "autoficha360",
        resumen:
            "Ordenamos la operación del taller: turnos, historial de cada vehículo y seguimiento del trabajo.",
        duenio: "Claudio Lucero",
        // Sin antes/solución/después: se muestra como referencia, no como caso
        // completo. Pedirle el antes/después para promoverlo como el de Generar.
        autorizado: true,
        testimonio: null,
        metrica: null,
    },
    {
        empresa: "RepMaq SRL",
        sistema: "Sistema de stock",
        // Falta rubro y ciudad. Con eso la fila dice bastante más.
        autorizado: true,
        testimonio: null,
        metrica: null,
    },
    {
        empresa: "Makeda Bazar y Deco",
        // Falta rubro, ciudad y qué se le entregó. Con eso la fila dice más.
        autorizado: true,
        testimonio: null,
        metrica: null,
    },
    {
        empresa: "Atul Vinos",
        // Falta rubro, ciudad y qué se le entregó. Con eso la fila dice más.
        autorizado: true,
        testimonio: null,
        metrica: null,
    },
    {
        empresa: "Kairo Bar",
        rubro: "Bar",
        ciudad: "Río Cuarto",
        sistema: "Landing de apertura",
        autorizado: true,
        testimonio: null,
        metrica: null,
    },
];

/*
 * autoficha360 no figura como cliente: es el sistema que usa Cl
 * Transmisiones, así que va como `sistema` en esa ficha y no como
 * una empresa aparte. Si mañana lo usa más de un taller, conviene
 * moverlo a `productos` en `estudio.ts` y mostrarlo como producto.
 */

/* --------------------------------------------------------- FAQ */

/**
 * Cada respuesta de acá sale de algo que la web ya afirma
 * (modelo comercial, proceso, soluciones). No hay promesas nuevas.
 * Las preguntas que faltan responder están listadas en `faqPendientes`.
 */
export const faq = [
    {
        q: "¿Tengo que cambiar cómo trabajo hoy?",
        a: "No. Arrancamos al revés: primero relevamos cómo trabajás, qué herramientas usás y dónde se pierde tiempo. El sistema se adapta a tu operación, no al revés.",
    },
    {
        q: "¿Quién capacita a mi equipo?",
        a: "Nosotros. La capacitación del equipo y el setup inicial están incluidos. No entregamos el sistema y desaparecemos: acompañamos la puesta en marcha hasta que se usa de verdad.",
    },
    {
        q: "¿Es un producto cerrado o me lo hacen a medida?",
        a: "Las dos cosas. Si tu rubro ya tiene una solución armada (inmobiliarias, talleres, ecommerce, stock), la implementamos y adaptamos. Si tu proceso es particular, lo desarrollamos a medida con alcance y presupuesto cerrados.",
    },
    {
        q: "¿Cómo se paga?",
        a: "Depende de la opción. Las soluciones ya armadas van con un setup inicial y un abono mensual que incluye soporte, mejoras y mantenimiento. Los desarrollos a medida se presupuestan cerrados por proyecto, con mantenimiento opcional.",
    },
    {
        q: "¿Me van a vender inteligencia artificial?",
        a: "Solo si suma. Primero miramos qué tareas se repiten y dónde se pierde tiempo. Muchas veces la respuesta no es IA sino ordenar los datos y el proceso. Si no aporta valor, te lo decimos.",
    },
    {
        q: "¿Funciona desde el celular?",
        a: "Sí, desde cualquier dispositivo: celular, tablet o computadora. Podés cargar un turno desde el mostrador y ver el mismo dato desde tu casa.",
    },
    {
        q: "¿En cuánto tiempo lo estoy usando?",
        a: "En menos de una semana. Ese es el tiempo típico desde que arrancamos hasta que tu equipo lo está usando en el local.",
    },
    {
        q: "Los datos que ya tengo en planillas, ¿quién los carga?",
        a: "Normalmente los carga el cliente, porque es quien mejor conoce su información. Si preferís que lo hagamos nosotros, podemos: se cotiza aparte y te lo decimos de entrada.",
    },
    {
        q: "Si dejo el servicio, ¿me llevo mis datos?",
        a: "Sí. La información es tuya y te la entregamos.",
    },
    {
        q: "¿Hay permanencia mínima?",
        a: "No. Podés dar de baja el servicio cuando quieras, sin plazo mínimo ni penalidad.",
    },
    {
        q: "¿Y si mi rubro no está en la lista?",
        a: "Inmobiliarias, talleres, comercios y ecommerce son los rubros para los que ya tenemos una solución armada, así que arrancan más rápido. Para cualquier otro rubro hacemos lo mismo pero a medida: el criterio no cambia. Si tu negocio hoy depende de planillas, papeles o mensajes, hay algo para ordenar.",
    },
    {
        q: "¿Trabajan solo en Río Cuarto?",
        a: "Trabajamos con pymes de Río Cuarto y zona, y ahí está la ventaja: podemos reunirnos, ver el proceso de cerca y acompañar la implementación en persona.",
    },
];

/**
 * Preguntas que un cliente hace antes de contratar y que la web
 * todavía no puede responder. Contestalas y las agrego al FAQ.
 */
/** Sin preguntas pendientes por ahora. Si aparece una recurrente, va acá. */
export const faqPendientes: string[] = [];
