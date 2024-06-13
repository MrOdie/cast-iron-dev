<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import type { NavItem } from './navigationItems/Navigation';

	// imports
	export let navItems: NavItem[], activeUrl: string, isOpen: boolean;

	let navigation: HTMLDivElement;
</script>

<div
	id="navigation"
	class="basis-2/5 md:hidden max-sm:flex max-sm:items-end max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:bottom-0 max-sm:bg-charcoal"
	transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
	bind:this={navigation}
>
	<ul class="flex flex-col items-center justify-around h-5/6 w-full">
		{#each navItems as { title, href }}
			<li
				class={activeUrl === href
					? 'group active-tab flex-auto text-center text-lg w-full '
					: 'group flex-auto text-center text-lg w-full'}
			>
				<a
					class="hover:bg-charcoal-200 px-20 py-3 block text-w group-[.active-tab]:bg-charcoal-200"
					on:click={() => (isOpen = !isOpen)}
					{href}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
