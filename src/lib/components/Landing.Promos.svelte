<script>
	import LandingPromosTornBanner from '$lib/components/Landing.Promos.TornBanner.svelte';
	import { imgUrl } from '$lib/cloudinary';
</script>

<div class="relative mt-32 pt-32 w-full promo-container">
	<LandingPromosTornBanner class="absolute top-0 left-0 w-full fill-primary" />
	<!--    <div class="absolute h-1/2 aspect-square bg-primary-radial rounded-full blur-3xl"/>-->

	<div class="flex flex-row justify-center">
		<div class="container text-3xl text-surface z-10 grid grid-cols-1 md:grid-cols-3">
			<!--			Texts-->
			<div class="flex flex-col items-start gap-8 justify-between py-32">
				<div class="text-4xl font-semibold">
					Exelentes Promos para su <span class="text-accent">negocio</span>
				</div>
				<div class="text-base">
					Llegue a todo su publico objetivo, maximisando sus ganancias y vistas a sus locales,
					nosotros facilitamos todo esto y más, apostamos por usted...
				</div>
				<div class="flex flex-row justify-between w-full">
					<div>Descargar</div>
					<div>Como Usar</div>
				</div>
			</div>

			<!--			Logo-->
			<div
				class="text-center flex flex-row justify-center text-secondary text-9xl -rotate-12 translate-x-1/4"
			>
				Logo
			</div>

			<!--			Phone pictures-->
			<div class="flex flex-row rotate-45 -translate-x-1/3 items-center">
				<img src={imgUrl('agency.popmind.padonde/phone.webp')} alt="phone screen home" />
				<img
					src={imgUrl('agency.popmind.padonde/phone.webp')}
					class=" h-1/2 object-contain"
					alt="phone screen details"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	/*.bg-primary-radial {*/
	/*    background: radial-gradient(#fff -200%, theme('colors.primary') 80%);*/
	/*}*/
	.promo-container::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50%;
		background-color: theme(colors.primary);
	}
</style>
