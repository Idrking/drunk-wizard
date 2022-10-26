<script>
	import Wand from '$lib/components/icons/Wand.svelte';
	import { fade } from 'svelte/transition';
</script>

<div transition:fade>
	<Wand --size="80px" color="#fef6e4" />
</div>

<style>
	@keyframes wiggle {
		0% {
			transform: rotate(-40deg);
		}

		15% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	div {
		background-color: var(--button);
		border-radius: 50%;
		padding: var(--spacing-l);
	}

	@media (prefers-reduced-motion: no-preference) {
		div {
			animation: wiggle 5000ms infinite;
			animation-timing-function: ease-in;
			animation-direction: alternate;
		}
	}
</style>
