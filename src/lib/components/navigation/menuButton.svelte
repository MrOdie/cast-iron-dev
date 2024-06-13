<script>
	// @ts-nocheck
	export let isOpen;
</script>

<div class:isOpen>
	<svg class="text-w" width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="8" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</div>

<style>
	svg {
		min-height: 25px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		/* `currentColor` means inherit color from the text color */
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	/* rotate the top line */
	.isOpen #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	/* hide the middle */
	.isOpen #middle {
		opacity: 0;
	}

	/* rotate the bottom line */
	.isOpen #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
