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
	name: "Minéral Piscine",
	description:
		"Venez découvrir la piscine de vos de rêves: pose et installation de votre piscine coque polyester à Villenave d'Ornon et en gironde",
	webiste: "https://mineralepiscine.com/",
	email: "contact@mineralpiscine.com",
	phone: "(+33) 05 33 09 73 50",
	location: {
		adresse: "175 Avenue des Pyrénées",
		city: "33140 Villenave d'Ornon",
	},
	horaire: "Mard-Sam: 09h à 12h / 14h à 18h",
	plan: "https://goo.gl/maps/ax8a1qirKoYpkmEz5",
}
