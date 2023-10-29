<script>
	import LandingPromosTornBanner from '$lib/components/Landing.Promos.TornBanner.svelte';
</script>

<div class="relative mt-32 py-64 w-full">
	<LandingPromosTornBanner class="absolute top-0 left-0 w-full fill-primary" />
	<div
		class="absolute hidden bg-black w-full h-4/6 top-1/2 -translate-y-1/2
            flex flex-row justify-center items-center"
	>
		<div class="h-1/2 aspect-square bg-primary-radial rounded-full blur-3xl" />
	</div>

	<div class="flex flex-row justify-center">
		<div class="container text-3xl text-surface z-10 grid grid-cols-1 md:grid-cols-3">
			<div class="flex flex-col items-start gap-8">
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
			<div class=" text-center flex flex-row justify-center text-secondary text-9xl -rotate-12">
				Logo
			</div>
		</div>
	</div>
</div>

<style>
	.bg-primary-radial {
		background: radial-gradient(#fff -200%, theme('colors.primary') 80%);
	}
</style>
