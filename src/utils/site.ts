// Configuración central del sitio Norware.
// Editar acá los datos de contacto: se propagan a toda la web.

export const site = {
    name: "Norware",
    // Cubre los dos caminos de la página: el negocio que hay que ordenar
    // y el proyecto que hay que construir.
    tagline: "Software a medida para tu negocio o tu proyecto",
    // Califica por síntoma, no por rubro: los rubros son ejemplos, no un filtro.
    // El primer renglón dice qué somos, porque hasta ahora la descripción
    // solo hablaba del negocio a ordenar y dejaba afuera a la mitad de los
    // que llegan buscando quién les construya algo.
    description:
        "Estudio de software en Río Cuarto. Ordenamos negocios que hoy funcionan con planillas, WhatsApp y papeles, y construimos productos desde cero: inmobiliarias, talleres y lubricentros, comercios, ecommerce y cualquier otro rubro, a medida. Soporte cercano e IA aplicada con criterio.",
    url: "https://norware.com",
    city: "Río Cuarto, Córdoba, Argentina",
    email: "norwarestudio@gmail.com",
    // Número en formato internacional, sin "+" ni espacios.
    whatsappNumber: "5493584228723",
    instagram: "https://www.instagram.com/norwarestudio",
    // Se muestra al lado de los botones de WhatsApp.
    tiempoRespuesta: "Te contestamos el mismo día",
};

export function whatsappLink(message: string): string {
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappDefault = whatsappLink(
    "Hola Norware, quiero ordenar un proceso de mi negocio. ¿Podemos hablar?"
);

// Navegación principal.
// El orden sigue al de la página; ver `secciones.ts` para la estructura
// completa y los dos caminos.
export const navItems = [
    { label: "Soluciones", href: "/#soluciones" },
    { label: "Caso real", href: "/#caso-real" },
    { label: "El estudio", href: "/#estudio" },
    { label: "Lo que construimos", href: "/#productos" },
    { label: "IA con criterio", href: "/#ia" },
    { label: "Diagnóstico", href: "/#diagnostico" },
    { label: "Contacto", href: "/#contacto" },
];

// Líneas de producto. `href` apunta a la sección de la home por ahora;
// cuando existan las páginas por vertical, cambiar a la ruta dedicada.
export const productLines = [
    { label: "Norware Inmobiliarias", href: "/#soluciones", futureRoute: "/inmobiliarias" },
    { label: "Norware Talleres y Lubricentros", href: "/#soluciones", futureRoute: "/talleres-lubricentros" },
    { label: "Norware Ecommerce y Stock", href: "/#soluciones", futureRoute: "/ecommerce-stock" },
    { label: "Norware a Medida", href: "/#soluciones", futureRoute: "/sistemas-a-medida" },
    { label: "Norware IA con Criterio", href: "/#ia", futureRoute: "/ia-con-criterio" },
    // Los productos propios no son una línea que se vende: son la prueba
    // de lo que el estudio sabe construir. Por eso apuntan a #productos.
    { label: "Productos propios", href: "/#productos", futureRoute: "/productos" },
];
