<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import pepe from '../assets/pepe.png';
</script>

<Navbar
	let:hidden
	let:toggle
	color="none"
	navClass="px-6 py-2.5 w-full"
	navDivClass="flex flex-wrap justify-between items-center text-emerald-500 max-w-full"
	class="custom-navbar"
>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold nav-header">
			The Paper Earth
		</span>
		<img src={pepe} class="ml-3 mt-2 h-8 sm:h-9" alt="The Paper Earth Logo" />
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl
		{hidden}
		divClass="w-full md:block md:w-auto md:mt-0 mt-4"
		ulClass="bg-transparent border-none text-center flex flex-col py-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
		nonActiveClass="text-emerald-500 hover:text-white px-0"
		activeClass="text-white px-0"
	>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/members">Members</NavLi>
		<NavLi href="/calendar">Calendar</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

<style lang="scss">
	.nav-header {
		font-family: 'Delicious Handrawn';
		font-size: 40px;
	}
</style>
