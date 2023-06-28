type Feature = {
	title: string
	description: string
	badgeColor: "bg-primary" | "bg-meta-orange" | "bg-tertary" | "bg-secondary"
	icon: {
		name: string
		alt?: string
		width?: number
	}
}

const featureData: Feature[] = [
	{
		title: "Expérience",
		description: `Votre professionnel Minéral Piscine dispose de plus de 25 ans d'expérience en tant que poseur de piscine à coque. Accompagnement de votre demande auprès de la mairie.`,
		badgeColor: "bg-secondary",
		icon: {
			name: "mdi:seal-variant",
			alt: "Icon-quality",
			width: 72,
		},
	},
	{
		title: "Large choix",
		description: `Plusieurs modèles de piscines avec ou sans permis de construire (petits, moyens et grands bassins).`,
		badgeColor: "bg-tertary",
		icon: {
			name: "SwimmingPool",
			alt: "Icon-luxury",
			width: 64,
		},
	},
	{
		title: "Financement",
		description: `Possibilité de financer votre projet piscine avec un crédit, TEG 3,90. Exemple : 92€/ mois pour un montant emprunté de 12500€ sur une durée de 180 mois.`,
		badgeColor: "bg-meta-orange",
		icon: {
			name: "SolarEuroBroken",
			alt: "Icon-euro",
			width: 64,
		},
	},
	{
		title: "Interventions",
		description: `Nos piscinistes interviennent à Villenave-d'Ornon, Talence, Pessac, Libourne, st Loubes et partout en Gironde.`,
		badgeColor: "bg-primary",
		icon: {
			name: "movelocation",
			alt: "Icon-location",
			width: 64,
		},
	},
]

export default featureData
