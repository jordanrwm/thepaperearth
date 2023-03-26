<script lang="ts">
	import sam from '$lib/assets/sam.jpg';
	import pj from '$lib/assets/pj.jpg';
	import cj from '$lib/assets/cj.jpg';
	import tommy from '$lib/assets/tommy.png';
	import zac from '$lib/assets/zac.jpg';
</script>

<div class="flex flex-col items-center justify-center flex-auto p-4 overflow-x-hidden">
	<div class="flex flex-col md:flex-row items-center justify-center mb-16 md:mb-36 mt-8">
		<div class="basis-2/4 flex flex-col items-center">
			<img src={sam} alt="Sam Moody" class="member-image mb-8 md:mb-0" />
		</div>
		<div class="basis-2/4 flex flex-col items-center">
			<h1 class="text-4xl md:text-8xl mb-4 text-center">Sam Moody</h1>
			<h3 class="text-2xl md:text-4xl">Vocals/Guitar</h3>
		</div>
	</div>
	<hr />
	<div class="flex flex-col-reverse md:flex-row items-center justify-center mb-16 md:mb-36">
		<div class="basis-2/4 flex flex-col items-center">
			<h1 class="text-4xl md:text-8xl mb-4 text-center">PJ Gebhart</h1>
			<h3 class="text-2xl md:text-4xl">Guitar</h3>
		</div>
		<div class="basis-2/4 flex flex-col items-center">
			<img src={pj} alt="PJ Gebhart" class="member-image mb-8 md:mb-0" />
		</div>
	</div>
	<div class="flex flex-col md:flex-row items-center justify-center mb-16 md:mb-36">
		<div class="basis-2/4 flex flex-col items-center">
			<img src={cj} alt="CJ Havens" class="member-image mb-8 md:mb-0" />
		</div>
		<div class="basis-2/4 flex flex-col items-center">
			<h1 class="text-4xl md:text-8xl mb-4 text-center">CJ Havens</h1>
			<h3 class="text-2xl md:text-4xl">Guitar</h3>
		</div>
	</div>
	<div class="flex flex-col-reverse md:flex-row items-center justify-center mb-16 md:mb-36">
		<div class="basis-2/4 flex flex-col items-center">
			<h1 class="text-4xl md:text-8xl mb-4 text-center">Tommy Thornton</h1>
			<h3 class="text-2xl md:text-4xl">Bass</h3>
		</div>
		<div class="basis-2/4 flex flex-col items-center">
			<img src={tommy} alt="Tommy Thornton" class="member-image mb-8 md:mb-0" />
		</div>
	</div>
	<div class="flex flex-col md:flex-row items-center justify-center">
		<div class="basis-2/4 flex flex-col items-center">
			<img src={zac} alt="Zac Castonguay" class="member-image mb-8 md:mb-0" />
		</div>
		<div class="basis-2/4 flex flex-col items-center">
			<h1 class="text-4xl md:text-8xl mb-4 text-center">Zac Castonguay</h1>
			<h3 class="text-2xl md:text-4xl">Drums</h3>
		</div>
	</div>
</div>

<style lang="scss">
	hr {
		height: 1px;
		background-color: white;
		border: none;
	}

	img {
		width: 60%;
		height: 60%;
	}

	@media (max-width: 768px) {
		img {
			height: 100% !important;
			width: 100% !important;
		}
	}
</style>
