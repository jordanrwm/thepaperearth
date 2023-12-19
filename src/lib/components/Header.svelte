<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bars3 } from '@steeze-ui/heroicons';

	const drawerStore = getDrawerStore();

	const triggerDrawer = () => {
		drawerStore.open({ position: 'top' });
	};
</script>

<header class="sticky top-0 z-10 bg-surface-800 p-4 md:h-14 h-12 flex items-center justify-between">
	<div><a class="w-fit font-extrabold md:text-lg text-xs" href="/">The Paper Earth</a></div>
	<div class="md:flex hidden space-x-8">
		<a class="w-fit md:text-md text-xs" href="/photos">Photos</a>
		<a class="w-fit md:text-md text-xs" href="/shows">Shows</a>
		<a class="w-fit md:text-md text-xs" href="/contact">Contact</a>
	</div>
	<div
		class="md:hidden flex"
		on:click={() => {
			triggerDrawer();
		}}
		on:keydown={() => {
			triggerDrawer();
		}}
		role="menu"
		tabindex={0}
	>
		<Icon src={Bars3} theme="solid" class="h-8 bg-surface-800" />
	</div>
</header>
