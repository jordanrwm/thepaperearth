<nav class="nav">
	<ul class="nav-links">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/about">About</a></li>
		<li><a class="nav-link" href="/music">Music</a></li>
		<li><a class="nav-link" href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
	}

	.nav-links {
		display: flex;

		li:first-child .nav-link {
			margin-left: 0;
		}

		li:last-child .nav-link {
			margin-right: 0;
		}
	}

	.nav-link {
		margin: 0 24px;
	}
</style>
