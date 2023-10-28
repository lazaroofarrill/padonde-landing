<script>
	import { imgUrl } from '$lib/cloudinary';
</script>

<div class="container relative">
	<div class="flex flex-row flex-wrap text-center md:text-left items-center">
		<div class="text-primary w-full md:w-5/12 text-5xl font-medium">
			Nuestras <span class="text-accent">mejores</span>
			categorías de
			<span class="text-accent">negocios</span>
		</div>
		<div class="grid grid-cols-6 basis-0 flex-1">
			<div
				class="flex-grow flex-shrink inline-block text-center basis-2 text-base md:text-left col-span-3 col-start-3"
			>
				No solo se trata de encontrar un lugar para ir u ordenar, comida o bebida, se trata de crear
				un confort y la experiencia completa pensando en usted...
			</div>
		</div>
	</div>
	<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-48 pt-16 mb-16">
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars-->
		{#each { length: 3 } as elem, i}
			<div class="flex flex-col gap-8">
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
						class="w-full drop-shadow-2xl"
					/>
				</div>
				<div class="text-center text-primary">Comidas en <span>restaurantes</span></div>
			</div>
		{/each}
	</div>
</div>
