<script lang="ts">
	import { page } from '$app/stores';
	import DesktopNav from '$lib/components/navigation/desktopNav.svelte';
	import MenuClose from '$lib/components/navigation/menuClose.svelte';
	import MenuOpen from '$lib/components/navigation/menuOpen.svelte';
	import MobileNav from '$lib/components/navigation/mobileNav.svelte';
	import logo from '$lib/images/logo/logo.svg';

	$: activeUrl = $page.url.pathname;

	let isOpen = false;
	let hamburgerBtn: HTMLLabelElement;
	export let navItems: NavItem[];

	const onWindowClick = (e) => {
		if (hamburgerBtn && hamburgerBtn.contains(e.target) === false) {
			isOpen = false;
		}
	};
</script>

<svelte:window on:click={onWindowClick} />

<header class="bg-primary xl:flex">
	<nav
		class="max-sm:py-2 max-sm:mx-12 md:mx-16 xl:container xl:mx-auto flex justify-between items-center"
	>
		<div class="block">
			<a href="/">
				<img
					id="headerLogo"
					class="block h-14 only-md:h-12 max-sm:h-10"
					src={logo}
					alt="Disney Momma Mouse"
				/>
			</a>
		</div>
		<div class="md:hidden leading-none">
			<!--			Componentize this eventually-->
			<label class="cursor-pointer" for="hamburgerMenu" bind:this={hamburgerBtn}>
				{#if !isOpen}
					<MenuOpen />
				{:else}
					<MenuClose />
				{/if}
			</label>
			<input class="hidden" id="hamburgerMenu" type="checkbox" bind:checked={isOpen} />
			<!--			Componentize this eventually-->
		</div>
		{#if isOpen}
			<MobileNav
				{navItems}
				{activeUrl}
				{isOpen}
				on:openHasChanged={(event) => {
					isOpen = event.detail;
				}}
			/>
		{/if}
		<DesktopNav {navItems} {activeUrl} />
	</nav>
</header>
