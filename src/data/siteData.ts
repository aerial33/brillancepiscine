type SiteParams = {
	name: string
	description: string
	webiste: string
	keywords?: string
	license?: string
	place?: string
	email: string
	phone: string
	location: { adresse: string; city: string }
	horaire: string
	plan?: string
}

export const siteParams: SiteParams = {
	name: "Brillance Piscine",
	description:
		"Venez découvrir la piscine de vos de rêves: pose et installation de votre piscine coque polyester à Montussan et en gironde",
	webiste: "https://brillancepiscine.com/",
	email: "contact@brillancepiscine.com",
	phone: "(+33) 05 64 37 59 55",
	location: {
		adresse: "42 Route de Fontenelle",
		city: "33450 MONTUSSAN",
	},
	horaire: "Mard-Sam: 09h à 12h / 14h à 18h",
	plan: "https://goo.gl/maps/JvcL3DHqNnMrz2qy7",
}
