<script lang="ts">
	import { Drawer } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	const closeDrawer = () => {
		drawerStore.close();
	};
</script>

<Drawer>
	<div class="h-full flex flex-col items-center justify-center space-y-8">
		<a
			class="w-fit text-xl"
			href="/"
			on:click={() => {
				closeDrawer();
			}}
			on:keydown={() => {
				closeDrawer();
			}}>Home</a
		>
		<a
			class="w-fit text-xl"
			href="/photos"
			on:click={() => {
				closeDrawer();
			}}
			on:keydown={() => {
				closeDrawer();
			}}>Photos</a
		>
		<a
			class="w-fit text-xl"
			href="/shows"
			on:click={() => {
				closeDrawer();
			}}
			on:keydown={() => {
				closeDrawer();
			}}>Shows</a
		>
		<a
			class="w-fit text-xl"
			href="/contact"
			on:click={() => {
				closeDrawer();
			}}
			on:keydown={() => {
				closeDrawer();
			}}>Contact</a
		>
	</div>
</Drawer>
