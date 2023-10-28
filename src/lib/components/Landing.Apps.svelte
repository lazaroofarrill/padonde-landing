<script>
	import { imgUrl } from '$lib/cloudinary';
</script>

<div class="container">
	<div class="h-48" />
	<div class="relative">
		<div
			class="absolute text-surface left-1/3 top-1/3 -translate-y-1/4 w-[386px] flex flex-col gap-4"
		>
			<div class="text-5xl">Descargue nuestra App Móvil</div>
			<div class="opacity-80">
				Cada día somos una comunidad más grande, enfocados en el bienestar de nuestros clientes...
			</div>
		</div>
		<img
			src={imgUrl('agency.popmind.padonde/phone.webp')}
			alt="phone"
			class="w-[30vw] top-1/2 left-0 md:absolute -translate-y-[45%]"
		/>
		<img
			src={imgUrl('agency.popmind.padonde/caipirinha')}
			class="absolute hidden lg:block left-1/2 bottom-0 w-[10vw] translate-y-1/3"
			alt="caipirinha"
		/>
		<div class="absolute top-0 left-o w-full h-full">
			<img
				class="absolute top-0 right-0 translate-x-1/4 -translate-y-1/3 w-[30vw]"
				src="/landing/dish_with_fork.png"
				alt="dish with fork"
				style="filter: drop-shadow(5px 5px 5px #222);"
			/>
			<div class=" absolute bottom-0 flex flex-row justify-end gap-4 pr-8 w-full">
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars-->
				{#each { length: 2 } as elem, i}
					<div
						class="bg-surface xl:w-2/12 bottom-0 right-8 p-8 rounded-t-[38%] flex flex-col gap-8 items-center"
					>
						<img src="/landing/google-play.svg" alt="Google Play" class="w-16" />
						<div class="flex flex-row gap-1.5">
							<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars-->
							{#each { length: 5 } as elem, i}
								<img class="w-4" src="/landing/star.svg" alt="rating-star" />
							{/each}
						</div>
						<div>
							<span>4.5 / 5</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1135 449" fill="none">
			<path
				d="M0 187.877C0 137.841 0 112.822 15.1591 96.4365C30.3182 80.0506 55.261 78.1077 105.147 74.2218L1012.15 3.56983C1069.66 -0.910258 1098.42 -3.1503 1116.71 13.7719C1135 30.694 1135 59.5379 1135 117.226V335C1135 388.74 1135 415.61 1118.31 432.305C1101.61 449 1074.74 449 1021 449H114C60.2599 449 33.3898 449 16.6949 432.305C0 415.61 0 388.74 0 335V187.877Z"
				fill="#C91480"
			/>
		</svg>
	</div>
</div>
