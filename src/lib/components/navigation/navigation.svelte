<script lang="ts">
	import { page } from '$app/stores';
	import DesktopNav from '$lib/components/navigation/desktopNav.svelte';
	import MenuButton from '$lib/components/navigation/menuButton.svelte';
	import MobileNav from '$lib/components/navigation/mobileNav.svelte';
	import logo from '$lib/images/logo/logo.svg';
	import type { NavItem } from './navigationItems/Navigation';

	$: activeUrl = $page.url.pathname;

	$: isOpen = false;
	let hamburgerBtn: HTMLLabelElement;
	export let navItems: NavItem[];

	const onWindowClick = (e: any) => {
		if (hamburgerBtn && hamburgerBtn.contains(e.target) === false) {
			isOpen = false;
		}
	};
</script>

<svelte:window on:click={onWindowClick} />

<header class="bg-charcoal xl:flex relative z-20">
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
				<MenuButton {isOpen} />
			</label>
			<input id="hamburgerMenu" type="checkbox" bind:checked={isOpen} />
			<!--			Componentize this eventually-->
		</div>
		<DesktopNav {navItems} {activeUrl} />
	</nav>
</header>

{#if isOpen}
	<MobileNav {navItems} {activeUrl} {isOpen} />
{/if}

<h3>Is Open Value: {isOpen}</h3>
