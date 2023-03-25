<nav class="nav">
	<div class="nav-header">The Paper Earth</div>
	<hr />
	<ul class="nav-links">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/about">About</a></li>
		<li><a class="nav-link" href="/music">Music</a></li>
		<li><a class="nav-link" href="/calendar">Calendar</a></li>
		<li><a class="nav-link" href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	.nav {
		padding: 16px;
		height: 160px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: black;
	}

	.nav-header {
		font-family: 'Delicious Handrawn';
		font-size: 48px;
		margin-bottom: auto;
	}

	hr {
		border: none;
		height: 1px;
		background-color: white;
		width: 95%;
	}

	.nav-links {
		display: flex;
		margin-top: 16px;

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
