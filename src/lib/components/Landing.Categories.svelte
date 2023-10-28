<script>
	import { imgUrl } from '$lib/cloudinary';
</script>

<div class="container relative">
	<div class="absolute rotate-[40deg] -left-20 -bottom-4 w-24">
		<div class="absolute aspect-square w-24 opacity-50 -top-4 left-3 bg-secondary rounded-full" />
		<img
			src={imgUrl('agency.popmind.padonde/icecream.webp')}
			alt="icecream"
			class="relative w-full h-full object-contain"
		/>
	</div>

	<div class="p-4 flex flex-row flex-wrap gap-4 text-center md:text-left items-center">
		<div class="text-primary w-full md:w-5/12 text-5xl font-medium">
			Nuestras <span class="text-accent">mejores</span>
			categorías de
			<span class="text-accent">negocios</span>
		</div>
		<div class="md:grid grid-cols-6 text-center md:basis-0 md:flex-1">
			<div
				class="flex-grow flex-shrink text-center basis-2 text-base md:text-left col-span-3 col-start-3"
			>
				No solo se trata de encontrar un lugar para ir u ordenar, comida o bebida, se trata de crear
				un confort y la experiencia completa pensando en usted...
			</div>
		</div>
	</div>

	<div
		class="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-16 p-16 md:p-0 md:gap-48 md:mt-16 mb-16"
	>
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars-->
		{#each { length: 3 } as elem, i}
			<div class="flex flex-col gap-4 md:gap-8">
				<div class="relative">
					<svg
						class="absolute scale-110"
						viewBox="0 0 98.11 97.138"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							transform="translate(-40.75 -31.004)"
							class="stroke-[2.5px] fill-none stroke-gray-500"
							stroke-linecap="round"
						>
							<path class="stroke-primary" d="m116.57 114.86a44.793 44.793 0 0 1-61.987-8.0311" />
							<path
								class="stroke-secondary"
								d="m99.541 35.324a44.793 44.793 0 0 1 28.999 21.386 44.793 44.793 0 0 1 3.867 35.824"
							/>
							<path class="stroke-accent" d="m45.115 74.708a44.793 44.793 0 0 1 8.6288-22.399" />
						</g>
					</svg>

					<img
						src={imgUrl('agency.popmind.padonde/tacos.webp')}
						alt="tacos"
						class="w-full h-full"
					/>
				</div>
				<div class="text-center text-primary font-semibold text-xl">
					Comidas en <span>restaurantes</span>
				</div>
			</div>
		{/each}
	</div>
</div>
