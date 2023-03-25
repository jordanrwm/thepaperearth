<nav class="nav">
	<div class="nav-left">
		<a class="nav-header" href="/">The Paper Earth</a>
		<div class="nav-socials" />
	</div>
	<ul class="nav-links">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/about">About</a></li>
		<li><a class="nav-link" href="/members">Members</a></li>
		<li><a class="nav-link" href="/music">Music</a></li>
		<li><a class="nav-link" href="/calendar">Calendar</a></li>
		<li><a class="nav-link" href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		@apply text-emerald-500;
		padding: 16px;
		height: 64px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-left {
		display: flex;
		align-items: center;
	}

	.nav-header {
		font-family: 'Delicious Handrawn';
		font-size: 40px;
		margin-right: 16px;
	}

	.nav-links {
		display: flex;
		justify-content: center;

		:first-child a {
			margin-left: 0;
		}

		:last-child a {
			margin-right: 0;
		}
	}

	.nav-link {
		margin: 0 20px;
	}
</style>
