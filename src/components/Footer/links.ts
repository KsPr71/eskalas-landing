export const NAV_LINKS = [
	{ label: "Características", href: "#features" },
	{ label: "Imágenes", href: "#screenshots" },
	{ label: "Precio", href: "#pricing" },
	{ label: "Reseñas", href: "#reviews" },
	{ label: "FAQ", href: "#faq" },
];

export const LEGAL_LINKS = [
	{ label: "Política de privacidad", href: "/privacy-policy" },
	{ label: "Términos de servicio", href: "/terms-of-service" },
];

export const fade = (delay = 0) => ({
	initial: { opacity: 0, y: 16 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: { duration: 0.5, delay },
});
