const TITLE_SECTION_CLASS =
	"fade-in mx-auto max-w-1390 px-4 text-center md:px-8 xl:px-0"

export interface TitleSectionProps {
	title: string
	titleText?: string
	headerLevel: "h1" | "h2" | "h3"
}

const TitleSection = ({
	title,
	titleText,
	headerLevel = "h1",
}: TitleSectionProps) => {
	const HeaderLevel = headerLevel
	return (
		<div class={TITLE_SECTION_CLASS}>
			<HeaderLevel class="text-gradient mx-auto mb-4.5 text-3xl font-semibold md:w-4/5  xl:w-2/3 xl:text-title-xl">
				{title}
			</HeaderLevel>
			<p class="mx-auto text-lg font-semibold md:w-4/5 lg:w-3/5 xl:w-[46%]">
				{titleText}
			</p>
		</div>
	)
}

export default TitleSection
