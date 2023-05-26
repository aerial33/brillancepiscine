import creatSlug from "../lib/creatSlug"

export default function ({
	name,
	url,
	description,
	composable,
}: {
	name: string
	url: string
	description: string
	composable: boolean
}) {
	return (
		<article class="group">
			<div class="relative z-1 overflow-hidden rounded-xl bg-gradient-to-t from-black/30 to-black/10">
				<img
					alt={name}
					src={url}
					class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:mix-blend-overlay"
				/>
				{composable && (
					<div class="absolute left-2 top-6 -rotate-12 rounded-md bg-white/80 p-1 text-sm font-semibold text-meta-orange">
						Escalier modulables
					</div>
				)}

				<div class="translate-y-25 duration-300 ease-linear group-hover:translate-y-0">
					<span class="absolute -bottom-21 -left-5 z-20 block h-37.5 w-[120%] rotate-6 bg-white/20 backdrop-blur-md"></span>
					<div class="absolute bottom-0 left-0 z-30 w-full pb-5 pt-7.5">
						<div class="group/item flex items-center justify-center">
							<a
								href={`/modeles-piscines/${creatSlug(name)}`}
								class="flex items-center gap-2 font-semibold uppercase text-white duration-300 ease-in-out group-hover/item:text-primary">
								{name}
								<svg
									class="fill-white duration-300 ease-in-out group-hover/item:translate-x-0.5 group-hover/item:fill-primary"
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10.4763 6.16664L6.00634 1.69664L7.18467 0.518311L13.6663 6.99998L7.18467 13.4816L6.00634 12.3033L10.4763 7.83331H0.333008V6.16664H10.4763Z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="p-4">
				<a href={`/modeles-piscines/${creatSlug(name)}`}>
					<h3 class="text-center text-xl font-bold capitalize text-primary">
						{name}
					</h3>
				</a>

				<p class="mt-2 line-clamp-3 text-sm/relaxed">{description}</p>
			</div>
		</article>
	)
}
