// Configuración central del sitio Norware.
// Editar acá los datos de contacto: se propagan a toda la web.

export const site = {
    name: "Norware",
    tagline: "Sistemas simples para ordenar tu negocio",
    // Califica por síntoma, no por rubro: los rubros son ejemplos, no un filtro.
    description:
        "Si tu negocio funciona con planillas, WhatsApp y papeles, lo ordenamos. Sistemas simples para pymes de Río Cuarto y zona: inmobiliarias, talleres y lubricentros, comercios, ecommerce y cualquier otro rubro, a medida. Soporte cercano e IA aplicada con criterio.",
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

// Navegación principal
export const navItems = [
    { label: "Soluciones", href: "/#soluciones" },
    { label: "Diagnóstico", href: "/#diagnostico" },
    { label: "Caso real", href: "/#caso-real" },
    { label: "IA con criterio", href: "/#ia" },
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
];
