<script>
	import LandingHome from '$lib/components/Landing.Home.svelte';
	import LandingApps from '$lib/components/Landing.Apps.svelte';
	import LandingCategories from '$lib/components/Landing.Categories.svelte';
</script>

<div class="flex flex-col justify-center items-center">
	<div class="container">
		<div
			class="bg-primary flex flex-row items-center justify-between text-surface h-16 px-32 rounded-br-[45px] rounded-bl-[45px]"
		>
			<div>Logo</div>
			<div class="flex flex-row items-center gap-8">
				<div>Inicio</div>
				<div>Apps</div>
				<div>Servicios</div>
				<div>Promos</div>
			</div>
			<div>Util Icons</div>
		</div>
	</div>

	<LandingHome />
	<LandingApps />
	<LandingCategories />
</div>
